import React from "react";
import { Flex, Box, Text, Stack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Flex bg="blue.500" color="white" padding="2" alignItems="center">
        <Box p="2">
          <Text fontSize="3xl" fontWeight="bold" mb={2} textAlign="center">
            Multiplayer Rock Paper Scissors
          </Text>
        </Box>
        <Stack direction="row" spacing={4} align="center" marginLeft="auto">
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none", color: "blue.300" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/game"
            _hover={{ textDecoration: "none", color: "blue.300" }}
          >
            Game
          </Link>
          <Link
            as={RouterLink}
            to="/waiting-room"
            _hover={{ textDecoration: "none", color: "blue.300" }}
          >
            Waiting Room
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

export default NavBar;
