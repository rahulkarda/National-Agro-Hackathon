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
    <Flex width="100%" p="180px 0 130px">
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
                      <Text>Prof Alka Gulati</Text>
                      <Text>Dr. Aparna Gupta</Text>
                      <Text>Prof Naveen Asathi</Text>
                      <Text>Prof Bhawna Pillai</Text>
                      <Text>Dr. Tripti Saxena</Text>
                      <Text>Prof. Jay Prakash Maurya</Text>
                      <Text>Prof. Vivek Kumar</Text>
                      <Text>Prof Megha Jain</Text>
                      <Text>Prof Harendra Singh</Text>
                      <Text>Prof. Vishw Gupta</Text>
                      <Text>Prof. Kamlesh Chandravanshi</Text>
                      <Text>Prof. Shraddha Shrivastava</Text>
                      <Text>Prof. Prakhar Bhadauriya</Text>
                      <Text>Prof Sachin Nikkam</Text>
                      <Text>Dr. Guarav Jain</Text>
                      <Text>Prof. Rohit Singh</Text>
                      <Text>Prof. Prem Kumar Soni</Text>
                      <Text>Prof. Gaurav Nayak</Text>
                      <Text>Prof. Prashant Chaturvedi</Text>
                      <Text>Prof. Mohd. Monis Khan</Text>
                      <Text>Prof. Juhi Nigam</Text>
                    </SimpleGrid>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Reveal>
          <Reveal left>
            <Text
              as="h1"
              mt="3rem"
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
                      <Text>Diksha Akankshi</Text>
                      <Text>Nancy Sahu</Text>
                      <Text>Somya Sahu</Text>
                      <Text>Vinay Pandey</Text>
                      <Text>Mobassir</Text>
                      <Text>Chikku</Text>{" "}
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
                      <Text>Uttam Kumar</Text>
                      <Text>Athrava Srivastava</Text>
                      <Text>Ranveer Raj</Text>
                      <Text>Yashraj Pany</Text>{" "}
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
                      <Text>Anjali Parihar</Text>
                      <Text>Shreysi Swaraj</Text>
                      <Text>Shreyansh Sharma</Text>
                      <Text>Aditya Sharma</Text>
                      <Text>Soumya Jain</Text>
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
