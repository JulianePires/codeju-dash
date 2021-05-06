import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Juliane Pires</Text>
        <Text color="gray.300" fontSize="small">
          mpiresjuliane@outlook.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Juliane Pires"
        src="https://github.com/JulianePires.png"
      />
    </Flex>
  );
}
