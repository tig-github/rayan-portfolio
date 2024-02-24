/*
Modal that displays links for a given resource
*/
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
} from '@chakra-ui/react';
  
const ProjectCardModal = ({isOpen, onClose, title, description}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} variant="purple" preserveScrollBarGap>
            <ModalOverlay />
            <ModalContent p={8}>
                <ModalHeader>
                    <Text align="center" fontSize="3xl"> 
                        {title}
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{description}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
      );
  }

  export default ProjectCardModal;