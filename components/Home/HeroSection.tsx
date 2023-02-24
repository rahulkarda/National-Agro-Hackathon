import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";

import Reveal from "../library/Reveal";
import Carousel from "./HeroCarousel";

const HeroSection: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      height={{ lg: "100vh" }}
      width="100%"
      p={{ xs: "40px 0 60px", sm: "140px 0 130px" }}
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          justify="space-between"
          alignItems="center"
          flexDirection={{ xs: "column-reverse", lg: "row" }}
        >
          <Box width={{ lg: "41%" }}>
            <Reveal
              display="flex"
              flexDirection={{ xs: "column-reverse", lg: "column" }}
              left
            >
              <SimpleGrid
                mt="1rem"
                mb="2rem"
                width={{ xs: "90%", md: "70%", lg: "150%" }}
                columns={{ xs: 2, sm: 7 }}
                spacing={{ xs: 10, lg: 5 }}
              >
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/NBA.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/logo.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/25.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/nirf.jpg" />
                </Reveal>
                <Reveal>
                  <Img
                    my="auto"
                    width="100%"
                    src="/assets/Hackathon Club Logo.png"
                  />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/gallery/11.jpg" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/IIC.png" />
                </Reveal>
              </SimpleGrid>
              <Box>
                <Text
                  as="h1"
                  fontSize={{ xs: "3xl", lg: "1.8rem" }}
                  fontWeight="700"
                  textAlign={{ xs: "center", lg: "left" }}
                  color="primary"
                  lineHeight="1.1"
                >
                  LNCT Group of Colleges present,
                </Text>
                <Text
                  as="h1"
                  fontSize={{ xs: "3xl", lg: "4xl" }}
                  fontWeight="700"
                  textAlign={{ xs: "center", lg: "left" }}
                  color="primary"
                  lineHeight="1.2"
                  mb={{ xs: "1rem", lg: "3rem" }}
                >
                  National Agro Hackathon – 2023
                  <br />
                  <Text as="span" fontSize={{ xs: "2xl", lg: "1.8rem" }}>
                    Version 1.0
                  </Text>
                </Text>
                <Text
                  textAlign={{ xs: "center", lg: "left" }}
                  color="#14213d"
                  mb="1rem"
                >
                  LNCT Group Hackathon Club along with LNCT Kalchuri Incubation Centre is
                  going to start a new initiative to provide College student’s
                  platform to solve some of the pressing problem related to real
                  life under an event “National Agro Hackathon – 2023
                  Version 1.0”
                </Text>
              </Box>
            </Reveal>
            <Reveal
              d="flex"
              justifyContent={{ xs: "center", lg: "flex-start" }}
              delay={0.4}
              mt="3rem"
            >
              <a href="" target="_blank">
                <Button
                  borderRadius="3px"
                  bg="primary"
                  color="white"
                  p="0 35px"
                  height="54px"
                  _hover={{
                    bg: "linkedin.300",
                  }}
                >
                  Register Now
                </Button>
              </a>
            </Reveal>
          </Box>
          <Reveal
            right
            delay={0.4}
            height={{ xs: "40%", sm: "auto" }}
            width={{ lg: "52%" }}
            mb={{ xs: "1rem", md: "0" }}
          >
            <Carousel />
          </Reveal>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeroSection;
