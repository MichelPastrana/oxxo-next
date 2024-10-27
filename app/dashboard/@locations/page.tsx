import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import { TOKEN_NAME } from "@/constants";
import SelectLocation from "./_components/SelectLocation";

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    let { data } = await axios.get<Location[]>("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0,0],
            locationAddress: "No existe"
            
        },
        ...data
    ]

    return(
        <div className="w-7/12"> 
            <div className="w-full h-[90vh] flex flex-col items-center bg-gray-600">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store}/>  
                </div>
            </div>
        </div>
        )
}

export default LocationsPage;