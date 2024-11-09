import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
    return (
        <Card className="w-ful min-w-[350px] max-w-[350px]">
            <CardHeader><b>{provider.providerName}</b></CardHeader>
            <Divider />
            <CardBody>
                <p>Correo electroónico: <b>{provider.providerEmail}</b></p>
                <p>Numero de telefono: <b>{provider.providerPhoneNumber}</b></p>
                {provider?.products?.length != 0 ? (
                    <p>Tiene <b>{provider.products.length}</b> producto{provider.products.length > 1 ? "s" : ""}</p>
                ) : (
                    <p>No tiene productos</p>
                )}
            </CardBody>
        </Card>
    )
}