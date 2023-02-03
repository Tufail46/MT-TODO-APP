"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      bg="#2e2d30"
      color="white"
      textAlign={"center"}
      pt={"80px"}
      pb={"150px"}
    >
      <Heading fontWeight={"bold"} fontSize={"54px"}>
        MT-TODO-APP
      </Heading>
      <Text fontSize={"18px"} fontStyle="italic" pt="15px">
        “Subtracting from your list of priorities is as important as adding to
        it.”
      </Text>
    </Box>
  );
}
