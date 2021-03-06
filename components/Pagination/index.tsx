import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationButton pageNumber={1} disabled />
        <PaginationButton pageNumber={2} />
        <PaginationButton pageNumber={3} />
        <PaginationButton pageNumber={4} />
      </Stack>
    </Stack>
  );
}
