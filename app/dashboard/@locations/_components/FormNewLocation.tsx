import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({ store }: { store: string | string[] | undefined }) {
    if (store) return null;

    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return (
        <form action={createLocation} className="bg-gray-300 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Oxxo Juriquilla" name="locationName" />
            <Input label="Direccion" placeholder="Av De La Luz S/N" name="locationAddress" />
            <Input label="Latitud" placeholder="120" name="locationLat" />
            <Input label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocations.data} />
            <Button type="submit" color="warning">Subir</Button>
        </form>
    );
}