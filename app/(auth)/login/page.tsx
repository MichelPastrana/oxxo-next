import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage () {
    return (
        <>
         <div className="bg-gray-300 px-10 py-2 rounded-md">
            <p className="text-2xl my-4" >Iniciar sesion</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button className="bg-orange-300">Iniciar sesion</Button>
                <p className="text-gray-500">¿No tienes cuenta? <Link href="/signup" className="text-blue-500 underline">Registrate</Link></p>
            </div>
         </div>
        </>
    );
}