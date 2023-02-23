import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Avatar,
  Icon,
  Img,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiGlobe } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";

import Reveal from "../library/Reveal";

const Contact: React.FC = () => {
  return (
    <Box width="100%" py={{ xs: "60px", lg: "120px" }}>
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal>
            <Text color="primary" fontWeight="700" fontSize="5xl" mb="1rem">
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
            <Img src="/assets/club.jpeg" />
          </Reveal>
          <Reveal mb="3rem">
            <a
              href="https://www.facebook.com/lncthackathonclub"
              target="_blank"
            >
              <Icon
                ml="1rem"
                bg="primary"
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
                bg="primary"
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
                bg="primary"
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
                bg="primary"
                color="white"
                p="2"
                width={12}
                height={12}
                borderRadius="50%"
                as={HiOutlineMail}
              />
            </a>
          </Reveal>
          <Reveal>
            <Text color="primary" fontWeight="700" fontSize="5xl" mb="1rem">
              Contact Us
            </Text>
          </Reveal>
          <Reveal
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              direction="column"
              justifyContent="center"
              mb={{ xs: "2rem", md: "0" }}
              mr={{ md: "5rem" }}
            >
              <Avatar
                color="white"
                bg="primary"
                size="2xl"
                name="Vivek Richhariya"
              />
              <Text mt="1rem" fontSize="2xl">
                Dr. Vivek Richhariya
              </Text>
              <Text mb="1rem" fontSize="2xl">
                Professor, CSE
              </Text>
              <Flex>
                <a href="mailto:vivekr@lnct.ac.in?subject=Query Regarding Hackathon">
                  <Icon
                    bg="primary"
                    color="white"
                    p="2"
                    width={12}
                    height={12}
                    borderRadius="50%"
                    as={HiOutlineMail}
                  />
                </a>
                <a href="tel:9826856015">
                  <Icon
                    ml="1rem"
                    bg="primary"
                    color="white"
                    p="2"
                    width={12}
                    height={12}
                    borderRadius="50%"
                    as={AiOutlinePhone}
                  />
                </a>
              </Flex>
            </Flex>
            <Flex
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <Avatar
                color="white"
                bg="primary"
                size="2xl"
                name="Jay Prakash Mourya"
              />
              <Text mt="1rem" fontSize="2xl">
                Prof. Jay Prakash Mourya
              </Text>
              <Text mb="1rem" fontSize="2xl">
                Asst. Professor, CSE
              </Text>
              <Flex>
                <a href="mailto:jayprakashm@lnct.ac.in?subject=Query Regarding Hackathon">
                  <Icon
                    bg="primary"
                    color="white"
                    p="2"
                    width={12}
                    height={12}
                    borderRadius="50%"
                    as={HiOutlineMail}
                  />
                </a>
                <a href="tel:7354549227">
                  <Icon
                    ml="1rem"
                    bg="primary"
                    color="white"
                    p="2"
                    width={12}
                    height={12}
                    borderRadius="50%"
                    as={AiOutlinePhone}
                  />
                </a>
              </Flex>
            </Flex>
          </Reveal>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
