import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ({ provider }: { provider: Provider }) {
    return (
        <Card>
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider />
            <CardBody>
                <p>Correo electroónico: <b>{provider.providerEmail}</b></p>
                <p>Numero de telefono: <b>{provider.providerPhoneNumber}</b></p>
                {provider.products ? (
                    <p>Tiene <b>{provider.products.length}</b> productos</p>
                ) : (
                    <p>No tiene productos</p>
                )}
            </CardBody>
        </Card>
    )
}