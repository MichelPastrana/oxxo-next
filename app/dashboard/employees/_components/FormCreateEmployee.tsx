import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "./SelectLocation";

export default async function FormCreateEmployee() {
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const locations = await responseLocations.json();
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-gray-300 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco" />
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio" />
            <Input isRequired={true} label="Correo electronico" name="employeeEmail" placeholder="aurelio@gmail.com" />
            <Input isRequired={true} label="Num. de Teléfono" name="employeePhoneNumber" placeholder="442XXXXXXX" />
            <Input type="file" name="employeePhoto"/>
            <SelectLocation stores={locations}/>
            <Button type="submit" color="primary">Crear empleado</Button>
        </form>
    )
}