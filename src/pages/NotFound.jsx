
import { Center, Box, Heading, Button, Text } from "@chakra-ui/react";
import Lottie from "lottie-react"
import notFound from "../assets/notFound.json";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
    <Center>
      <Box textAlign="center" mt="20">
        <Lottie
          loop={true}
          animationData={notFound}
          style={{ height: "300px", width: "300px" }}
        />
        <Heading mt={4}> Error-404</Heading>
        <Text color="gray.500" mt={2}>
          The page you're looking for doesn't exist.
        </Text>
        <Button mt={4} onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Box>
    </Center>
    </>
  );
}

export default NotFound;
