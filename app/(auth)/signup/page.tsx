import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage () {
    return (
        <>
         <div className="bg-gray-300 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Registrarse</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" type="password" isRequired={true} size="sm"/>
                <Input label="Repetir contraseña" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button className="bg-red-300">Registrarse</Button>
                <p className="text-gray-500">¿Ya tienes una cuenta? <Link href="/login" className="text-blue-500 underline">Inicia Sesion</Link></p>
            </div>
         </div>
        </>
    );
}