import { Location } from "@/entities";
import { API_URL } from "@/constants";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const reponse = await fetch(`${API_URL}/locations`,
        {
            headers: {
                ...authHeaders()
            },
            next: {
                tags: ["dashboard:locations"]
            }
        });

    let data: Location[] = await reponse.json()
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe"

        },
        ...data
    ]

    return (
        <div className="w-7/12 h-[90vh] flex flex-col items-center bg-gray-600 overflow-hidden overflow-y-auto">
            <div className="w-1/2 my-10">
                <SelectLocation locations={data} store={searchParams?.store} />
            </div>
            <div className="w-8/12">
                <LocationCard store={searchParams.store} />
            </div>
            <div className="w-6/12">
                <FormNewLocation store={searchParams.store} />
            </div>
            <DeleteLocationButton store={searchParams.store} />
            <UpdateLocation>
                <FormUpdateLocation  store={searchParams.store} />
            </UpdateLocation>
        </div>
    )
}

export default LocationsPage;