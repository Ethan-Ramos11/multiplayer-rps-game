import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Score = ({ playerOne, playerTwo }) => {
  return (
    <>
      <Box textAlign="center" justifySelf="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          Player One: {playerOne}
        </Text>

        <Text fontSize="2xl" mb={8} fontWeight="bold" color="blue.500">
          Player Two: {playerTwo}
        </Text>
      </Box>
    </>
  );
};

export default Score;
