import { Employee } from "@/entities";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="max-h-72 min-h-72 size-72">
            <CardHeader>
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
            <CardFooter className="absolute bottom-0 py-2 h-14">
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                    <Button variant="ghost">Actualizar datos</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}