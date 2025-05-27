
import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { FaHome, FaUser} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

const links = [
  { name: "Home", path: "/home", icon: FaHome },
  { name: "Profile", path: "/profile", icon: FaUser },
  { name: "Settings", path: "/settings", icon: IoMdSettings  },
  { name: "Messages", path: "/messages", icon: AiFillMessage },
];

function Navbar(){
  return (
    <Box bg="white" px={6} py={3} shadow="md" position="sticky" top="0" zIndex="100">
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold" color="blue.500"> ConnectLy </Text>

        <HStack spacing={6}>
          {links.map(({ name, path, icon }) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                color: isActive ? "#3182ce" : "black",
                fontWeight: isActive ? "bold" : "normal",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              })}>

              <Icon as={icon} boxSize={4}/> {name} </NavLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
