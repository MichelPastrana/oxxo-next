'use client'

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";

export default function CreateEmployee({ children, icon }: { children: ReactNode, icon: ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
            <Button onPress={onOpen} color="primary">{icon}</Button>
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