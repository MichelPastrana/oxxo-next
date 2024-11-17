import { Employee } from "@/entities";
import Link from "next/link";
import DeleteEmployee from "./DeleteEmployee";
import CreateEmployee from "./CreateUser";
import FormCreateUserEmployee from "./FormCreateUser";
import { LuUser } from "react-icons/lu";
import FormUpdateUser from "./FormUpdateUser";

export default function EmployeeDataCard({ employee }: { employee: Employee }) {
    return (
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 m-2 py-2">
            <div className="text-xl flex flex-col h-full justify-between">
                <div className="py-10">
                    <h1 className="font-bold">{employee.employeeName + " " + employee.employeeLastName}</h1>
                    <h1>{employee.employeeEmail}</h1>
                    <h1>{employee.employeePhoneNumber}</h1>
                    <Link className="underline" href={{
                        pathname: `/dashboard`,
                        query: {
                            store: String(employee.location?.locationId)
                        }
                    }}>
                        <h1>{employee.location?.locationName}</h1>
                    </Link>
                </div>
                <div>
                    <DeleteEmployee employeeId={employee.employeeId} />
                </div>
            </div>
            <div className="h-full py-2 w-1 bg-zinc-300 mx-6" />
            <CreateEmployee icon={<LuUser size="20" />} photo={employee?.employeePhoto} >
                {
                    !employee.user ? (
                        <FormCreateUserEmployee employee={employee} />
                    ) : (
                        <FormUpdateUser user={employee.user} />
                    )
                }
            </CreateEmployee>
        </div>
    )
}