/*
Large list of items
*/

import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  Text,
  Stack,
  HStack,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// items is an object {name1: description1 ... namen: descriptionn}
// optionally includes tablist
const ListField = ({ items, mh, link }) => {
  return (
    <Box bg="#DCCAE9" minHeight={mh}>
      <List spacing={4} p="1rem">
        {Object.keys(items).map((k) => {
          return (
            <ListItem key={Math.random()}>
              <Stack direction="column">
                <HStack>
                  <Heading size="sm">{k}</Heading>
                  {link && (
                    <>
                      <Link href={link} isExternal>
                        <ExternalLinkIcon mx="2px" mb=".2rem" />
                      </Link>
                    </>
                  )}
                </HStack>
                <Text w="100%"> {items[k]} </Text>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ListField;
