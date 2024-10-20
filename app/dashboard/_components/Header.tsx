import Image from "next/image";

export default function Header(){
    return (
        <div className="w-screen h-[10vh] bg-gray-300 flex flex-row items-center px-10">
            <Image src="oxxo_logo.svg" alt="Oxxo logo" width={100} height={0} draggable={false}/>
        </div>
    )
}