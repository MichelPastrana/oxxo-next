import Image from "next/image";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-gray-700 w-screen h-screen overflow-hidden grid">
            <div className="place-content-center place-self-center place-itmes-center text-center">
                <div className="flex flex-col items-center bottom-10 relative">
                    <Image src="/oxxo_logo.svg" alt="Logo de oxxo" width={200} height={0} />
                </div>
                {children}
            </div>
        </div>
    )
}