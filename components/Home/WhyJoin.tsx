import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { IoEarthSharp } from "react-icons/io5";
import Lottie from "lottie-react";

import Reveal from "../library/Reveal";
import animationData from "@/public/assets/why_lottie.json";
import ThemeCarousel from "./Carousel";

const WhyJoin: React.FC = () => {
  return (
    <Box
      width="100%"
      py={{ xs: "60px", sm: "120px" }}
      bg="linear-gradient(180deg,#6454f0 10%,#6ee2f5 105%)"
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex alignItems="center" flexDirection={{ xs: "column", lg: "row" }}>
          <Box width={{ xs: "90%", md: "60%", lg: "41%" }}>
            <Reveal left>
              <Text
                color="white"
                fontWeight="700"
                fontSize="5xl"
                textAlign="center"
                lineHeight="48px"
                mb={{ xs: "3rem", md: "0", lg: "0" }}
              >
                Why Join ?
              </Text>
              <Lottie
                animationData={animationData}
                height="100%"
                width="auto"
              />
            </Reveal>
          </Box>
          <Box ml={{ lg: "8.3%" }} width={{ lg: "50%" }}>
            <Flex flexWrap="wrap" width="100%">
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text color="white" fontSize="6xl">
                  <HiOutlineLightBulb />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovative Solutions
                </Text>
                <Text color="white" mb="1rem">
                  Build innovative solutions for problems. Be a part of Nation
                  Building Opportunity.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <IoEarthSharp />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovation Movement
                </Text>
                <Text color="white" mb="1rem">
                  Be part of World’s biggest Open Innovation Movement
                  Opportunity to work with some of the best talents.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <GiGears />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Out-Of-The-Box Solutions
                </Text>
                <Text color="white" mb="1rem">
                  Talented youngsters from all over the country offer
                  out-of-the-box solutions to your problems
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <FaMedal />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Recognition And Visibility
                </Text>
                <Text color="white" mb="1rem">
                  Nationally Recognition and visibility for your company across
                  all premier institutions in India
                </Text>
              </Reveal>
            </Flex>
          </Box>
        </Flex>
        <Reveal>
          <Text
            textAlign="center"
            fontSize="5xl"
            fontWeight="700"
            mt="2rem"
            mb={{ xs: "0", md: "2rem" }}
            color="white"
          >
            Themes
          </Text>
        </Reveal>
        <Flex
          flexDirection={{ xs: "column-reverse", md: "row" }}
          pl={{ md: "2rem" }}
        >
          <Reveal width={{ xs: "100%", md: "45%" }}>
            <UnorderedList color="white" fontSize="2xl">
              <ListItem>Precision Agriculture inciuding applications of sensors, WEN, ICT, Artificial intelligence, IOT & drone</ListItem>
              <ListItem>Supply Chain & Agriculture Logistics</ListItem>
              <ListItem>Post-Harvest, Food Technology & Value addition</ListItem>
              <ListItem>Waste to Wealth & Green Energy in Agricuture</ListItem>
              <ListItem>Miscellaneous</ListItem>
              <ListItem>Open Innovation</ListItem>
            </UnorderedList>
          </Reveal>
          <Reveal
            right
            mb={{ xs: "2rem", md: "0" }}
            width={{ xs: "100%", md: "55%" }}
          >
            <ThemeCarousel />
          </Reveal>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyJoin;
