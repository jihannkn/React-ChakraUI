import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    IconButton,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  export default function Navbar() {
    return (
      <Box
        w={"100%"}
        h={"70px"}
        bg={"#f3f4f6"}  // Warna latar belakang netral terang
        borderBottom={"3px solid #000"}  // Garis tegas untuk kesan brutalism
      >
        <Flex
          w={"100%"}
          h={"100%"}
          p={"4"}
          mx={"auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"#000"} // Menggunakan warna hitam pekat
        >
          {/* Logo atau Nama Brand */}
          <Box>
            <Link to="/">
              <Button
                bg={"#ffcc00"} // Warna mencolok
                color={"#000"}
                borderRadius={"0"} // Elemen kotak untuk kesan geometris brutalism
                border={"2px solid #000"} // Border tegas
                fontWeight={"bold"}  // Font yang bold untuk kesan kuat
                position="relative"
                boxShadow="5px 5px 0px black" // Shadow hitam menjorok
                transition="transform 0.2s ease, box-shadow 0.2s ease" // Efek transisi
                _hover={{
                  transform: "translate(5px, 5px)", // Tombol bergerak, shadow tetap di tempat
                  boxShadow: "0px 0px 0px black", // Menghapus shadow saat hover
                }}
                _active={{
                  transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
                  boxShadow: "inset 2px 2px 0px black", // Shadow masuk ke dalam
                }}
              >
                MyApp
              </Button>
            </Link>
          </Box>
  
          {/* Menu Navigasi */}
          <Flex alignItems="center" gap="4">
            <Link to="/product">
              <Button
                bg={"#00ccff"}
                color={"#000"}
                borderRadius={"0"}
                border={"2px solid #000"}
                fontWeight={"bold"}
                position="relative"
                boxShadow="5px 5px 0px black" // Shadow hitam menjorok
                transition="transform 0.2s ease, box-shadow 0.2s ease" // Efek transisi
                _hover={{
                  transform: "translate(5px, 5px)", // Tombol bergerak, shadow tetap di tempat
                  boxShadow: "0px 0px 0px black", // Menghapus shadow saat hover
                }}
                _active={{
                  transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
                  boxShadow: "inset 2px 2px 0px black", // Shadow masuk ke dalam
                }}
              >
                Products
              </Button>
            </Link>
  
            <Link to="/category">
              <Button
                bg={"#ff0066"}
                color={"#fff"}
                borderRadius={"0"}
                border={"2px solid #000"}
                fontWeight={"bold"}
                position="relative"
                boxShadow="5px 5px 0px black" // Shadow hitam menjorok
                transition="transform 0.2s ease, box-shadow 0.2s ease" // Efek transisi
                _hover={{
                  transform: "translate(5px, 5px)", // Tombol bergerak, shadow tetap di tempat
                  boxShadow: "0px 0px 0px black", // Menghapus shadow saat hover
                }}
                _active={{
                  transform: "translate(2px, 2px)", // Tombol bergerak sedikit saat ditekan
                  boxShadow: "inset 2px 2px 0px black", // Shadow masuk ke dalam
                }}
              >
                Categories
              </Button>
            </Link>
  
            {/* Menu Drop Down untuk Opsi Tambahan */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                borderRadius={"0"}
                border={"2px solid #000"}
                color={"#000"}
                bg={"#fff"}
                _hover={{ bg: "#ccc" }}
              />
              <MenuList
                bg={"#fff"}
                border={"2px solid #000"}
                borderRadius={"0"}
                boxShadow={"none"}
              >
                <Link to="/auth/login">
                  <MenuItem
                    _hover={{ bg: "#ffcc00", color: "#000" }}
                    fontWeight={"bold"}
                  >
                    Login
                  </MenuItem>
                </Link>
                <Link to="/auth/register">
                  <MenuItem
                    _hover={{ bg: "#00ccff", color: "#000" }}
                    fontWeight={"bold"}
                  >
                    Register
                  </MenuItem>
                </Link>
                <Link to="/product/create">
                  <MenuItem
                    _hover={{ bg: "#ff0066", color: "#fff" }}
                    fontWeight={"bold"} 
                  >
                    Create Product
                  </MenuItem>
                </Link>
                <Link to="/category/create">
                  <MenuItem
                    _hover={{ bg: "#ffcc00", color: "#000" }}
                    fontWeight={"bold"}
                  >
                    Create Category
                  </MenuItem>
                </Link> {/* Perhatikan ini ditutup dengan benar */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    );
  }
  