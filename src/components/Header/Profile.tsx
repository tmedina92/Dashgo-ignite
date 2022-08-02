import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thamis Medina</Text>
          <Text color="gray.300" fontSize="small">
            thamismedina@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thamis Medina"
        src="https://github.com/tmedina92.png"
      />
    </Flex>
  );
}
