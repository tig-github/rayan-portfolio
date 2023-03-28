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
  Heading,
} from "@chakra-ui/react";

// items is an object {name1: description1 ... namen: descriptionn}
// optionally includes tablist
const ListField = (items) => {
  return (
    <Box bg="#DCCAE9">
      <List spacing={4} pt="1rem" pl="1rem" pb="1rem" pr="1rem">
        {Object.keys(items["items"]).map((k) => {
          return (
            <ListItem>
              <Stack direction="column">
                <Heading size="sm">{k}</Heading>
                <Text w="100%"> {items["items"][k]} </Text>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ListField;
