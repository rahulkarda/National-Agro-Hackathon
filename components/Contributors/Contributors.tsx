import React from "react";
import {
  Table,
  Flex,
  Text,
  Container,
  Td,
  Tbody,
  Tr,
  SimpleGrid,
} from "@chakra-ui/react";

import Reveal from "../library/Reveal";

const HeroSection: React.FC = () => {
  return (
    <Flex width="100%" p="120px 0 130px">
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal left>
            <Text
              as="h1"
              mb={{ xs: "1rem", lg: "1rem" }}
              fontSize={{ xs: "2xl", lg: "3xl" }}
              fontWeight="700"
              textAlign="center"
              color="primary"
              lineHeight="1.1"
            >
              Our Contributors
            </Text>
          </Reveal>
          <Reveal width="95%">
            <Table
              mt="2rem"
              color="primary"
              border="solid 1px black"
              borderRadius="4px"
              variant="simple"
            >
              <Tbody>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px black">
                    Chief Patron
                  </Td>
                  <Td border="solid 1px black">
                    Shri J.N. Chouksey, Chairman, LNCT Group
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px black">Patron(s)</Td>
                  <Td border="solid 1px black">
                    Dr. Anupam Chouksey, Secretary, LNCT Group
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px black">Convener</Td>
                  <Td border="solid 1px black">
                    Dr. Ashok Kumar Rai, Director Administration
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px black">SPOC</Td>
                  <Td border="solid 1px black">Dr. Vivek Richhariya</Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px black">Organizing Member</Td>
                  <Td border="solid 1px black">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Dr. Vineet Richhariya</Text>
                      <Text>Dr. Sadhna K. Mishra</Text>
                      <Text>Dr. Bhupesh Gour</Text>
                      <Text>Dr. Anoop Chaturvedi</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px black">Technical Committee</Td>
                  <Td border="solid 1px black">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Dr. V. N. Bartaria</Text>
                      <Text>Dr. Alka Gulati</Text>
                      <Text>Dr. Bhawna Pillai</Text>
                      <Text>Dr. Tripti Saxena</Text>
                      <Text>Dr. Aparna Gupta</Text>
                      <Text>Prof Naveen Asati</Text>
                      <Text>Prof Megha Jain</Text>
                      <Text>Prof. Shraddha Shrivastava</Text>
                      <Text>Prof. Prakhar Bhadauriya</Text>
                      <Text>Prof Sachin Nikkam</Text>
                      <Text>Dr. Prashant Chaturvedi</Text>
                      <Text>Dr. Anand Singh</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Reveal>
          <Reveal left>
            <Text
              as="h1"
              mt="4rem"
              mb="1rem"
              fontSize={{ xs: "2xl", lg: "3xl" }}
              fontWeight="700"
              textAlign="center"
              color="primary"
              lineHeight="1.1"
            >
              Student Coordinators
            </Text>
          </Reveal>
          <Reveal width="95%">
            <Table
              mt="2rem"
              color="primary"
              border="solid 1px black"
              borderRadius="4px"
              variant="simple"
            >
              <Tbody>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px black">
                    Technical Committee
                  </Td>
                  <Td border="solid 1px black">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Rahul Karda</Text>
                      <Text>Gunjan Bangde</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px black">
                    Organizing Committee
                  </Td>
                  <Td border="solid 1px black">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Rahul Karda</Text>
                      <Text>Varsha Sharma</Text>
                      <Text>Ayush Galphat</Text>
                      <Text>Raj Malpani</Text>
                      <Text>Princess Soni</Text>
                      <Text>Om Golhani</Text>
                      <Text>Raj Raghuwanshi</Text>
                      <Text>Kartik Singh Kushwah</Text>
                      <Text>Kartik Sahu</Text>
                      <Text>Jui Kamone</Text>
                      <Text>Jahnvi Chhabra</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px black">
                    Promotion Committee
                  </Td>
                  <Td border="solid 1px black">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Rahul Karda</Text>
                      <Text>Varsha Sharma</Text>
                      <Text>Princess Soni</Text>
                      <Text>Ayush Galphat</Text>
                      <Text>Aaditya Agarwal</Text>
                      <Text>Jahnvi Chhabra</Text>
                      <Text></Text>
                      <Text></Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Reveal>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeroSection;
