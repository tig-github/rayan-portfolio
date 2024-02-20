/*
Large list of items
*/

import React from "react";
import {
  Box,
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
// links is an object {name1: link1 ... namen: linkn} that must have matching names with items
const ListField = ({ items, mh, links }) => {
  return (
    <Box bg="#DCCAE9" minHeight={mh}>
      <List spacing={4} p="1rem">
        {Object.keys(items).map((k) => {
          return (
            <ListItem key={Math.random()*1000}>
              <Stack direction="column">
                <HStack>
                  <Heading size="sm">{k}</Heading>
                  {links && (
                    <>
                      <Link href={links[k]} isExternal>
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
