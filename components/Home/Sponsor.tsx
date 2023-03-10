import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  // Avatar,
  // SimpleGrid,
  Icon,
  Img,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiGlobe } from "react-icons/fi";
// import { AiOutlinePhone } from "react-icons/ai";

import Reveal from "../library/Reveal";
// import { wrap } from "module";

const Sponsor: React.FC = () => {
  return (
    <Box width="100%" py={{ xs: "60px", lg: "40px" }}>
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal>
            <Text color="primary" fontWeight="700" fontSize="4xl" mb="2rem">
              Organized By
            </Text>
          </Reveal>
          <Reveal
            display="flex"
            mb="1rem"
            width={{ xs: "90%", lg: "50%" }}
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Img src="/assets/club.png" />
          </Reveal>
          <Reveal mb="3rem" mt="1rem">
            <a
              href="https://www.facebook.com/lncthackathonclub"
              target="_blank"
            >
              <Icon
                ml="1rem"
                bg="primeYellow"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiFacebook}
              />
            </a>
            <a
              href="https://www.instagram.com/lncthackathonclub/"
              target="_blank"
            >
              <Icon
                ml="1rem"
                bg="primeYellow"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiInstagram}
              />
            </a>
            <a href="https://hackathonclub.lnct.ac.in/" target="_blank">
              <Icon
                ml="1rem"
                bg="primeYellow"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={FiGlobe}
              />
            </a>
            <a href="mailto:hackathon@lnct.ac.in">
              <Icon
                ml="1rem"
                bg="primeYellow"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={HiOutlineMail}
              />
            </a>
          </Reveal>
        </Flex>
      </Container>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt="3rem"
        flexWrap="wrap"
      >
        <Reveal>
          <Text color="primary" fontWeight="700" fontSize="4xl" mb="3rem">
            Sponsored By
          </Text>
        </Reveal>
        {/* <Box width={{ lg: "70%" }}> */}
        {/* <Reveal
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              left
              // justifyContent="space-evenly"
            > */}
        {/* <SimpleGrid
                mt="1rem"
                mb="2rem"
                width={{ xs: "90%", md: "70%", lg: "150%" }}
                columns={{ xs: 1, sm: 5 }}
                spacing={{ xs: 10, lg: 5 }}
              > */}
        <Flex
          alignItems="center"
          justifyContent="space-around"
          flexDirection="row"
          mt="0rem"
          flexWrap={{ xs: "wrap" }}
          mb="0"
        >
          <Reveal display="flex" flexWrap={{xs:"wrap", lg:"wrap"}} justifyContent="space-around">
            <Img my={{xs:"auto", md:"auto", lg:"auto"}} mx={{lg:"3rem"}} maxWidth={{xs:"30%", lg:"15%"}}  src="/assets/kliclogo.png" />
            <Img my={{xs:"1rem", md:"2rem", lg:"3rem"}} mx={{lg:"3rem"}} maxWidth={{xs:"30%", lg:"15%"}}  src="/assets/mp_startup_center_logo.png" />
            <Img my={{xs:"1rem", md:"2rem", lg:"3rem"}} mx={{lg:"3rem"}} maxWidth={{xs:"25%", lg:"10%"}}  src="/assets/AIIC.png" />
            <Img my={{xs:"1rem", md:"2rem", lg:"3rem"}} mx={{lg:"3rem"}} maxWidth={{xs:"30%", lg:"15%"}} src="/assets/pspl.png" />
            <Img my={{xs:"1rem", md:"auto", lg:"auto"}} mx={{lg:"3rem"}} maxWidth={{xs:"50%", lg:"20%"}}  src="/assets/jjpl.png" />
            <Img my={{xs:"1rem", md:"2rem", lg:"3rem"}} mx={{lg:"3rem"}} maxWidth={{xs:"30%", lg:"15%"}} src="/assets/Ananjay.png" />
            <Img my={{xs:"1rem", md:"2rem", lg:"3rem"}} mx={{lg:"3rem"}} maxWidth={{xs:"30%", lg:"15%"}} src="/assets/kala kunj.png" />
          </Reveal>    
        </Flex>
        {/* </SimpleGrid> */}
        {/* </Reveal> */}
        {/* </Box> */}
      </Flex>
    </Box>
  );
};

export default Sponsor;
