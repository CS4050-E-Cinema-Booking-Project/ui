import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

const Header = ({filterDisplayChange}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="gray.400"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="sm">Movies</Heading>
        <Divider />
      </Flex>
      <button onClick={filterDisplayChange}>Filter</button>
    </Flex>
  );
};

export default Header;