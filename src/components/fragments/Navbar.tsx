import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <Box w={"100%"} h={"70px"} borderBottom={"2px"} borderColor={"gray.600"}>
        <Flex w={"1400px"} h={"100%"} p={"4"} mx={"auto"} justifyContent={"space-between"} alignItems={"center"} borderX={"2px"} borderColor={"gray.600"} color={"gray.600"}>
            <Flex alignItems={"center"} gap={"4"} fontSize={"2xl"} fontWeight={"bold"}>
                <Menu>
                    <MenuButton as={IconButton} icon={""} fontSize={"2xl"} fontWeight={"bold"} border={"none"} variant="outline" aria-label="Menu" />
                    <MenuList>
                        <MenuItem as={Link} to="/dashboard">Dashboard</MenuItem>
                        <MenuItem as={Link} to="/etalase">Etalase</MenuItem>
                    </MenuList>
                </Menu>
                <Link to={"/"}>APP MARKET</Link>
            </Flex>
            <Flex alignItems={"center"} gap={"4"}>
                <Button to={"auth/login"} colorScheme='blue'>Login</Button>
                <Button to={"auth/register"} colorScheme='blue'>Register</Button>
            </Flex>
        </Flex>
    </Box>
    )
}