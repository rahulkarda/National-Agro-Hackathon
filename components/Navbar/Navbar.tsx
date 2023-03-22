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
      height={{xs:"80px", md:"90px", lg:"70px"}}
      px={{ md: "100px" }}
      boxShadow="0px 1px 20px 0px rgba(0,0,0,0.1)"
      alignContent={"center"}
    >
      <Container maxWidth="none" height="100%" width="100vw">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          // justifyContent="space-between"
          // justifyContent="center"
          justify={{xs:"space-between", lg:"center"}}
        >
          <Link href="https://lnct.ac.in/" target="_blank">
            <Img
              src="/assets/logo.png"
              // maxHeight="100%"
              maxWidth="auto"
              width={{ xs: "76px", sm: "136px", md: "146px", lg: "146px"}}
            />
          </Link>
          <Flex display={{ xs: "none", sm: "none", md: "flex" }} align="center">
            <Link href="/">
              <Text
                borderRadius="3px"
                ml="3rem"
                // mr="3rem"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("") ? "none" : "underline",
                }}
                textUnderlineOffset="4px"
                height="44px"
                fontSize={{xs:"xl", sm:"xl", xl: "xl"}}
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
                width={{md:"200px", xl:"191px"}}
                fontSize={{xs:"xl", sm:"xl", xl: "xl"}}
                color="primary"
                // mr="2rem"
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
                width={{md:"120px",xl:"102px"}}
                // fontSize={{xs:"2xl", sm:"xl", xl: "2xl"}}
                fontSize={{xs:"xl", sm:"xl", xl: "xl"}}
                color="primary"
                // mr="2rem"
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
                fontSize={{xs:"xl", sm:"xl", xl: "xl"}}
                p="0 25px"
                color="primary"
              >
                Contributors
              </Text>
            </Link>
            <Link href="https://hackathonclub.lnct.ac.in/" target="_blank">
              <Text
                borderRadius="3px"
                mt="0.5rem"
                textUnderlineOffset="4px"
                height="44px"
                // fontSize={{xs:"xl", sm:"2xl"}}
                width="180px"
                fontSize={{xs:"xl", sm:"xl", xl: "xl"}}
                p="0 25px"
                color="primary"
              >
                About Us
              </Text>
            </Link>
            {/* <Link href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank"> */}
            <Link href="/result">
              <Button
                // ml="1rem"
                borderRadius="50px"
                height="44px"
                p="0 25px"
                color="white"
                bg="primeYellow"
                _hover={{
                  bg: "white",
                  color: "primeYellow",
                  border: "2px solid",
                  borderColor: "primeYellow"
                }}
              >
                {/* Register Now */}
                Results
              </Button>
            </Link>
          </Flex>
          <IconButton
            display={{ xs: "flex", sm: "flex", md: "none" }}
            aria-label="Open Navbar"
            onClick={onOpen}
            icon={<GiHamburgerMenu />}
            bg="primeYellow"
            _hover={{
                    bg: "primeYellow"
                  }}
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
                  bg="primeYellow"
                  _hover={{
                    bg: "primeYellow"
                  }}
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
                      textDecoration: page.includes("problemStatements") ? "underline" : "none",
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
                fontSize={{xs:"2xl", sm:"2xl", xl: "2xl"}}
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
                <Link href="https://hackathonclub.lnct.ac.in/" target="_blank">
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

                {/* <Link href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank"> */}
                <Link href="/result">
                  <Button
                    borderRadius="50px"
                    height="44px"
                    mt="0.5rem"
                    p="0 25px"
                    mb="1rem"
                    width="150px"
                    color="white"
                    bg="primeYellow"
                    _hover={{
                      bg: "white",
                      color: "primeYellow",
                      border: "2px solid",
                      borderColor: "primeYellow"
                    }}
                  >
                    {/* Register Now */}
                    Results
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
