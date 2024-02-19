import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Stack,
    Text,
    List,
    ListItem,
    Link,
} from '@chakra-ui/react';
  
const ResourceModal = ({isOpen, onClose, resource, resourceLinks, icon}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} variant="purple">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text align="center" fontSize="3xl"> 
                        {resource} Resources
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack align="center">
                        {icon}
                        <List styleType="disc" pt="3rem">
                            {Object.keys(resourceLinks).map(r => {
                                return (
                                    <ListItem mt="5%">
                                        <Link href={resourceLinks.r} isExternal>
                                            {r}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
      );
  }

  export default ResourceModal;