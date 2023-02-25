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

const Navbar: React.FC = () => {
  const [page, setPage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    setPage(router.pathname);
  }, [router.pathname]);

  return (
    <Box
      position="fixed"
      bg="white"
      top="0"
      left="0"
      zIndex="sticky"
      width="100vw"
      height="74px"
      px={{ md: "100px" }}
      boxShadow="0px 1px 20px 0px rgba(0,0,0,0.1)"
    >
      <Container maxWidth="none" height="100%" width="100%">
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
              width={{ xs: "136px", sm: "163px" }}
            />
          </Link>
          <Flex display={{ xs: "none", sm: "flex" }} align="center">
            <Link href="/">
              <Text
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("") ? "none" : "underline",
                }}
                textUnderlineOffset="4px"
                height="44px"
                fontSize="2xl"
                color="primary"
              >
                Home
              </Text>
            </Link>
            <Link href="/problems">
              <Text
                ml="3rem"
                borderRadius="3px"
                mt="0.5rem"
                sx={{
                  textDecoration: page.includes("problems") ? "underline" : "none",
                }}
                textUnderlineOffset="4px"
                height="44px"
                fontSize="2xl"
                color="primary"
              >
                Problem Statements
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
                fontSize="2xl"
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
                fontSize="2xl"
                p="0 25px"
                color="primary"
              >
                About Us
              </Text>
            </Link>
            <Link href="" target="_blank">
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
            display={{ xs: "flex", sm: "none" }}
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
                <Link href="/problems">
                  <Text
                    borderRadius="3px"
                    mt="0.5rem"
                    sx={{
                      textDecoration: page.includes("/") ? "none" : "underline",
                    }}
                    textUnderlineOffset="4px"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    Problem Statements
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
                    sx={{
                      textDecoration: page.includes("contributors")
                        ? "underline"
                        : "none",
                    }}
                    textUnderlineOffset="4px"
                    height="44px"
                    fontSize="2xl"
                    color="primary"
                  >
                    About Us
                  </Text>
                </Link>

                <Link href="" target="_blank">
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
