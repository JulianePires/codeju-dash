import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      <Text as="span" color="purple.500" mr="1">
        @
      </Text>
      codeJu
      <Text as="span" color="purple.500" m="1">
        .
      </Text>
      dash
    </Text>
  );
}
