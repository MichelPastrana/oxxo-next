import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function ManagerPage({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, 'dashboard:managers']
        }
    });
    const data: Manager = await response.json();
    return (
        <Card className="mx-20 py-2 bg-orange-100">
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Teléfono: <b>{data.managerPhoneNumber}</b></p>
                
            </CardBody>
        </Card>
        //Posible agregar mapa de la api
    );
}