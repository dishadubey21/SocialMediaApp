
import React, { useEffect } from "react";
import { Box, Heading, Image, Center, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import logo from "../assets/image.png";

function SplashScreen(){
  const navigate = useNavigate();

  useEffect(() => { 
    setTimeout(() => {
      navigate("/home");
    }, 2500); } , []);

  return (
    <Center height="100vh" flexDirection="column">
      <Image src={logo} alt="App Logo" boxSize="350px" mb={4} />
    </Center>
  );
};

export default SplashScreen;
