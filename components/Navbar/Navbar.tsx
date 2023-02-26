import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Button,
  Img,
  Text,
  Drawer,
  DrawerBody,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import { wrap } from "module";

const Navbar: React.FC = () => {
  const [page, setPage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    setPage(router.pathname);
  }, [router.pathname]);

  return (
    <Box
      display={"flex"}
      position="fixed"
      bg="white"
      top="0"
      left="0"
      zIndex="sticky"
      width="100vw"
      height={{md:"100", lg:"74px"}}
      px={{ md: "100px" }}
      boxShadow="0px 1px 20px 0px rgba(0,0,0,0.1)"
      alignContent={"center"}
    >
      <Container maxWidth="none" height="100%" width="100vw">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="https://lnct.ac.in/" target="_blank">
            <Img
              src="/assets/logo.png"
              maxHeight="100%"
              width={{ xs: "136px", sm: "163px", md:"0", xl:"163px" }}
            />
          </Link>
          <Flex display={{ xs: "none", sm: "none", md: "flex" }} align="center">
            <Link href="/">
              <Text
                borderRadius="3px"
                ml="3rem"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("") ? "underline" : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                color="primary"
              >
                Home
              </Text>
            </Link>
            <Link href="/problemStatements">
              <Text
                ml="3rem"
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("problemStatements") ? "underline" : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                width={{md:"200px", xl:"230px"}}
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                color="primary"
              >
                Problem Statements
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                ml="3rem"
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("contact") ? "underline" : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                width={{md:"120px",xl:"125px"}}
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                color="primary"
              >
                Contact Us
              </Text>
            </Link>
            <Link href="/contributors">
              <Text
                ml="1rem"
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("contributors")
                    ? "underline"
                    : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                p="0 25px"
                color="primary"
              >
                Contributors
              </Text>
            </Link>
            <Link href="https://lnct.ac.in/">
              <Text
                borderRadius="3px"
                mt="0.5rem"
                textUnderlineOffset="4px"
                height="44px"
                // fontSize={{xs:"xl", sm:"2xl"}}
                width="180px"
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                p="0 25px"
                color="primary"
              >
                About Us
              </Text>
            </Link>
            <Link href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank">
              <Button
                ml="1rem"
                borderRadius="3px"
                height="44px"
                p="0 25px"
                color="white"
                bg="primary"
                _hover={{
                  bg: "linkedin.300",
                }}
              >
                Register Now
              </Button>
            </Link>
          </Flex>
          <IconButton
            display={{ xs: "flex", sm: "flex", md: "none" }}
            aria-label="Open Navbar"
            onClick={onOpen}
            icon={<GiHamburgerMenu />}
            bg="primary"
            color="white"
          />
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                display="flex"
                justifyContent="flex-end"
                borderBottomWidth="1px"
              >
                <IconButton
                  aria-label="Close Navbar"
                  onClick={onClose}
                  icon={<IoCloseSharp />}
                  bg="primary"
                  color="white"
                />
              </DrawerHeader>
              <DrawerBody display="flex" flexDirection="column">
                <Link href="/">
                  <Text
                    borderRadius="3px"
                    sx={{
                      textDecoration: page.includes("") ? "none" : "underline",
                    }}
                    textUnderlineOffset="4px"
                    mt="0.5rem"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    Home
                  </Text>
                </Link>
                <Link href="/problemStatements">
                  <Text
                    borderRadius="3px"
                    mt="0.5rem"
                    sx={{
                      textDecoration: page.includes("problemStatements") ? "none" : "underline",
                    }}
                    textUnderlineOffset="4px"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    Problem Statements
                  </Text>
                </Link>
                <Link href="/contact">
              <Text
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("contact") ? "underline" : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                width={{md:"120px",xl:"125px"}}
                fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                color="primary"
              >
                Contact Us
              </Text>
            </Link>
                <Link href="/contributors">
                  <Text
                    borderRadius="3px"
                    sx={{
                      textDecoration: page.includes("contributors")
                        ? "underline"
                        : "none",
                    }}
                    textUnderlineOffset="4px"
                    mt="0.5rem"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    Contributors
                  </Text>
                </Link>
                <Link href="https://lnct.ac.in/">
                  <Text
                    borderRadius="3px"
                    mt="0.5rem"
                    textUnderlineOffset="4px"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    About Us
                  </Text>
                </Link>

                <Link href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank">
                  <Button
                    borderRadius="3px"
                    height="44px"
                    mt="0.5rem"
                    p="0 25px"
                    mb="1rem"
                    width="150px"
                    color="white"
                    bg="primary"
                    _hover={{
                      bg: "linkedin.300",
                    }}
                  >
                    Register Now
                  </Button>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
