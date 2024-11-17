import updateEmployee from "@/actions/employees/update";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "../../_components/SelectLocation";

export default async function FormUpdateEmployee({ employee }: { employee: Employee }) {
    const { employeeId } = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const locations = await responseLocations.json();
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-gray-700 h-fit">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName} />
            <Input label="Correo electronico" name="employeeEmail" defaultValue={employee.employeeEmail} />
            <Input label="Num. de Teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber} />
            <Input type="file" name="employeePhoto" defaultValue={employee.employeePhoto} />
            <SelectLocation stores={locations} defaultStore={employee.location?.locationId} />
            <Button type="submit" color="primary">Actualizar datos</Button>
        </form>
    )
}