'use client'

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";
import { LuTrash } from "react-icons/lu";

export default function DeleteProvider({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="danger"><LuTrash size="20"/></Button>
            <Modal className="bg-gray-300" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full">
                    {(onClose) => (
                        <>
                            <ModalBody>
                                {children}
                                <Button onPress={onClose} className="bg-black text-white">Cancelar</Button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}