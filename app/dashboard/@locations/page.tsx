import axios from "axios";
import { Location } from "@/entities";
import { API_URL} from "@/constants";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    let { data } = await axios.get<Location[]>(`${API_URL}/locations`,
        {
            headers: {
                ...AuthHeaders()
            }
        });

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
        </div>
    )
}

export default LocationsPage;