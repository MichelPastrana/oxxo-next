'use client'

import { Button, Image, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";

export default function CreateEmployee({ children, icon, photo }: { children: ReactNode, icon: ReactNode, photo: string | undefined }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
            <Image src={photo}
                onClick={onOpen}
                isZoomed
                className="boject-cover"
                classNames={{ img: "size-60" }} />
            <Modal className="bg-gray-300" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full">
                    {() => (
                        <>
                            <ModalBody>
                                {children}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}