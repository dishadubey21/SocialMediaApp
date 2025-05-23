import { useNavigate } from "react-router";
import {Center, Box, Heading, Input, Button ,Text} from "@chakra-ui/react";

function Login(){
    const navigate = useNavigate();
    return (
        <>
    <Center mt="20">
    <Box p={6} bg="gray.50" shadow="md" borderRadius="md" w="sm">
      
        <Center><Heading size="3xl" fontWeight="bold">Login</Heading></Center>
        <Center><Heading size="sm" color="gray.500">Let's get you logged in and connect.</Heading></Center>
        <Input placeholder="Email" mt="10"/>
        <Input placeholder="Password" type="password" mt="2"/>
        <Button width="100%" mt="2">Login</Button>
        <Center>
            <Text fontSize="smaller" mt="1"> New User? <Button onClick={() => navigate('/register')} variant="ghost"
            size="s" pb={1}> Register </Button>
        </Text>
        </Center>
      
    </Box>
  </Center>
  </>
);
}

    
export default Login;