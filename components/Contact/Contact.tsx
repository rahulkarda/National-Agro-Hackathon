import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Avatar,
  Icon,
  // Img,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
// import { FiFacebook, FiInstagram, FiGlobe } from "react-icons/fi";
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
          <Reveal mt="0rem">
            <Text color="primary" fontWeight="700" fontSize="3xl" mb="1rem">
              Coordinators
            </Text>
          </Reveal>
          <Reveal
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Flex
              mt="3rem"
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
                src="https://media.licdn.com/dms/image/C5103AQFnONBTZB2xLw/profile-displayphoto-shrink_100_100/0/1559818693668?e=1683158400&v=beta&t=Q9VTblTCbMtwcRJkNNu-ET_dHNeN4pv31v4lqOu7ii0"
              />
              <Text mt="1rem" fontSize="xl">
                Dr. Vivek Richhariya
              </Text>
              <Text mb="1rem" fontSize="xl">
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
              mt="3rem"
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <Avatar
                color="white"
                bg="primary"
                size="2xl"
                name="Tripti Saxena"
                src="https://media.licdn.com/dms/image/C5603AQFuCPPzHjosdA/profile-displayphoto-shrink_100_100/0/1616229712746?e=1683158400&v=beta&t=_wPY-Sxyw0MF6ple_RhHzfzOtkIb-npHhVCrlzAaZY8"
              />
              <Text mt="1rem" fontSize="xl">
                Dr. Tripti Saxena
              </Text>
              <Text mb="1rem" fontSize="xl">
                Associate Professor, CSE
              </Text>
              <Flex>
                <a href="mailto:triptis@lnct.ac.in?subject=Query Regarding Hackathon">
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
                <a href="tel:9753485817">
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
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal mt="5rem">
            <Text color="primary" fontWeight="700" fontSize="3xl" mb="1rem" textAlign={"center"}>
              Student Coordinators
            </Text>
          </Reveal>
          <Reveal
            display="flex"
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            <Flex
              mt="3rem"
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
                name="Rahul Karda"
                src="https://media.licdn.com/dms/image/D4D03AQFBa8_25JT-mw/profile-displayphoto-shrink_400_400/0/1672921604766?e=1683158400&v=beta&t=GIvnpr6v2KbES0uTQZcFGNVWDsVMtU6j7lxXDENKAGQ"
              />
              <Text mt="1rem" fontSize="xl">
                Rahul Karda
              </Text>
              <Text mb="1rem" fontSize="xl">
                Organizer
              </Text>
              <Flex>
                <a href="mailto:rahulkarda2002@gmail.com?subject=Query Regarding Hackathon">
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
                <a href="tel:7389589990">
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
              mt="3rem"
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
                name="Ayush Galphat"
                src="https://media.licdn.com/dms/image/C4E03AQFzaToGkJZ6nw/profile-displayphoto-shrink_100_100/0/1660575106418?e=1683158400&v=beta&t=S2P-R9b2vHmN0RZmcvrUeAawkwuQH7R8kvqY_uba3K0"
              />
              <Text mt="1rem" fontSize="xl">
                Ayush Galphat
              </Text>
              <Text mb="1rem" fontSize="xl">
                Co-Organizer
              </Text>
              <Flex>
                <a href="mailto:ayushgalphat@gmail.com?subject=Query Regarding Hackathon">
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
                <a href="tel:9098698413">
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
              mt="3rem"
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
                name="Rajkumar Malpani"
                src="https://media.licdn.com/dms/image/D5603AQHIHHpW5qab-w/profile-displayphoto-shrink_100_100/0/1676827516415?e=1683158400&v=beta&t=3HApBL0LgrbEDetZYwRqupX-39-lOmhAmFoZvVoDwiE"
              />
              <Text mt="1rem" fontSize="xl">
                Rajkumar Malpani
              </Text>
              <Text mb="1rem" fontSize="xl">
                Co-Organizer
              </Text>
              <Flex>
                <a href="mailto:rajkm9111@gmail.com?subject=Query Regarding Hackathon">
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
                <a href="tel:7509909271">
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
              mt="3rem"
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <Avatar
                color="white"
                bg="primary"
                size="2xl"
                name="Om Golhani"
                src="https://media.licdn.com/dms/image/C4D03AQGssIl_CAIbHg/profile-displayphoto-shrink_100_100/0/1661688615586?e=1683158400&v=beta&t=A_V-QuFNb4wUPcruhNY4sTcd4GdYAdoaAzpWRdaA5Kk"
              />
              <Text mt="1rem" fontSize="xl">
                Om Golhani
              </Text>
              <Text mb="1rem" fontSize="xl">
                Co-Organizer
              </Text>
              <Flex>
                <a href="mailto:omgolhani3604@gmail.com?subject=Query Regarding Hackathon">
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
                <a href="tel:9424963604">
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
