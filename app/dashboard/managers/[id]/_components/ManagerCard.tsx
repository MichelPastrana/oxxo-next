import ModalGeneric from "@/app/dashboard/_components/ModalGeneric";
import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import FormUpdateUser from "./FormUpdateUser";
import FormCreateUserManager from "./FormCreateUser";

export default function ManagerCard({ manager }: { manager: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full"><b className="text-4xl pr-4">{manager.managerFullName}</b></p>
                {
                    manager.user ? (
                        <ModalGeneric icon={<LuPlus size="20"/>}>
                            <FormUpdateUser user={manager.user}/>
                        </ModalGeneric>
                    ) : (
                        <ModalGeneric icon={<LuPlus size="20"/>}>
                            <FormCreateUserManager manager={manager}/>
                        </ModalGeneric>
                    )
                }
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhoneNumber}</b></p>
                    <p className="w-full">Salario: <b>{manager.managerSalary}</b></p>
                    <p className={manager.location ? "w-full" : "hidden"}>
                        Tienda:{" "}
                        <Link href={{
                            pathname: `/dashboard`,
                            query: {
                                store: manager?.location?.locationId
                            }
                        }}
                        >
                            <b className="underline">{manager?.location?.locationName}</b>
                        </Link>
                    </p>
                </div>
            </CardBody>
        </Card >
        //Posible agregar mapa de la api
    )
}