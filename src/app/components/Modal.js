import React, { useEffect } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import IsValid from "./IsValid";

export default function ModalNext() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []); 

    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center font-inter">Good automata</ModalHeader>
                            <ModalBody className="flex items-center justify-center">
                                <IsValid/>
                            </ModalBody>
                            <ModalFooter className="font-inter">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
