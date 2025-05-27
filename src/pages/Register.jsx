
import { Center, Box, Heading, Input, Button, Text, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  return (
    <Center mt="20">
      <Box p={6} bg="gray.50" shadow="md" borderRadius="md" w="sm">
        <Center>
          <Heading size="3xl" fontWeight="bold">Register</Heading>
        </Center>
        <Center>
          <Heading size="sm" color="gray.500">Create your account and connect to the world.</Heading>
        </Center>

        <VStack spacing={3} mt={6}>
          <HStack spacing={3} w="100%">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </HStack>
          <Input placeholder="Phone Number" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
          <Button width="100%">Register</Button>
        </VStack>

        <Center>
          <Text fontSize="sm" mt={2}>
            Already an existing user?
            <Button onClick={() => navigate('/login')} variant="ghost" size="sm" p="0" pb="1" height="auto">Login</Button>
          </Text>
        </Center>
      </Box>
    </Center>
  );
}

export default Register;
