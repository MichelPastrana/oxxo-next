"use client"
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { CgFormatHeading } from "react-icons/cg";

export default function LoginPage () {
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let auhtData: any = {}
        auhtData.userEmail = formData.get("userEmail");
        auhtData.userPassword = formData.get("userPassword");
        const { data } = await axios.post(`${API_URL}/auth/login`, {
            ...auhtData
        }, {
            withCredentials: true,
        });
        console.log(data);
        return;
    }

    return (
         <form className="bg-gray-300 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4" >Iniciar sesion</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button className="bg-red-300" type="submit">Iniciar sesion</Button>
                <p className="text-gray-500">¿No tienes cuenta? <Link href="/signup" className="text-blue-500 underline">Registrate</Link></p>
            </div>
         </form>
    );
}