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
              mb={{ xs: "1rem", lg: "3rem" }}
              fontSize={{ xs: "4xl", lg: "5xl" }}
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
              border="solid 1px #390099"
              borderRadius="4px"
              variant="simple"
            >
              <Tbody>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px #390099">
                    Chief Patron
                  </Td>
                  <Td border="solid 1px #390099">
                    Shri J.N. Chouksey, Chairman, LNCT Group
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px #390099">Patron(s)</Td>
                  <Td border="solid 1px #390099">
                    Dr. Anupam Chouksey, Secretary, LNCT Group
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px #390099">Convener</Td>
                  <Td border="solid 1px #390099">
                    Dr. Ashok Kumar Rai, Director Administration
                  </Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px #390099">SPOC</Td>
                  <Td border="solid 1px #390099">Dr. Vivek Richhariya</Td>
                </Tr>
                <Tr>
                  <Td border="solid 1px #390099">Organizing Member</Td>
                  <Td border="solid 1px #390099">
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
                  <Td border="solid 1px #390099">Technical Committee</Td>
                  <Td border="solid 1px #390099">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Dr. V. N. Bartariya</Text>
                      <Text>Dr. Alka Gulati</Text>
                      <Text>Dr. Bhawna Pillai</Text>
                      <Text>Dr. Tripti Saxena</Text>
                      <Text>Dr. Aparna Gupta</Text>
                      <Text>Prof Naveen Asathi</Text>
                      <Text>Prof Megha Jain</Text>
                      <Text>Prof. Shraddha Shrivastava</Text>
                      <Text>Prof. Prakhar Bhadauriya</Text>
                      <Text>Prof Sachin Nikkam</Text>
                      <Text>Dr. Prashant Chaturvedi</Text>
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
              fontSize={{ xs: "4xl", lg: "5xl" }}
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
              border="solid 1px #390099"
              borderRadius="4px"
              variant="simple"
            >
              <Tbody>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px #390099">
                    Technical Committee
                  </Td>
                  <Td border="solid 1px #390099">
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
                  <Td borderTopLeftRadius="4px" border="solid 1px #390099">
                    Organizing Committee
                  </Td>
                  <Td border="solid 1px #390099">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Rahul Karda</Text>
                      <Text>Varsha Sharma</Text>
                      <Text>Ayush Galphat</Text>
                      <Text>Rajkumar Malpani</Text>
                      <Text>Princess Soni</Text>
                      <Text>Om Golhani</Text>
                      <Text>Raj Raghuwanshi</Text>
                      <Text>Kartik Singh Kushwah</Text>
                      <Text>Kartik Sahu</Text>
                      <Text>Jui Kamone</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td borderTopLeftRadius="4px" border="solid 1px #390099">
                    Promotion Committee
                  </Td>
                  <Td border="solid 1px #390099">
                    <SimpleGrid
                      columns={{ xs: 1, sm: 4 }}
                      spacing={{ xs: 5, lg: 5 }}
                    >
                      <Text>Rahul Karda</Text>
                      <Text>Varsha Sharma</Text>
                      <Text>Princess Soni</Text>
                      <Text>Ayush Galphat</Text>
                      <Text>Aaditya Agarwal</Text>
                      <Text>Rajkumar Malpani</Text>
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
