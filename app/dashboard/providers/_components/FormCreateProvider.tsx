import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider() {
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl">Crear proveedor</h1>
            <Input label="Nomre" placeholder="Pepsi" name="providerName"/>
            <Input label="Email" placeholder="business@pepsi.com" name="providerEmail"/>
            <Input label="Número" placeholder="444XXXXXXX" name="providerPhoneNumber"/>
            <Button color="primary" type="submit">Crear proveedor</Button>
        </form>
    )
}