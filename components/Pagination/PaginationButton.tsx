import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginationButtonProps extends ButtonProps {
  pageNumber: number;
  disabled?: boolean;
}

export function PaginationButton({
  pageNumber,
  disabled = false,
  ...rest
}: PaginationButtonProps) {
  return disabled ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="purple"
      disabled
      _disable={{ bgColor: "purple.500", cursor: "default" }}
      {...rest}
    >
      {pageNumber}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      {...rest}
    >
      {pageNumber}
    </Button>
  );
}
