import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";

export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)

    return (
        <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-gray-700 rounded-md p-10 mr-20 items-center justify-center">
            <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nomre" placeholder="Pepsi" name="providerName" />
            <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Email" placeholder="business@pepsi.com" name="providerEmail" />
            <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Número" placeholder="444XXXXXXX" name="providerPhoneNumber" />
            <Button color="primary" type="submit">Actualizar</Button>
            <DeleteProvider>
                <h1 className="text-4xl text-center">¿Estas seguro de eliminar al proveedor <b>{provider.providerName}</b>?</h1>
                <DeleteProviderButton providerId={providerId}/>
            </DeleteProvider>
        </form>
    )
}