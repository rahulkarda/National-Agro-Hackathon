import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Reveal from "../library/Reveal";

const ProcessFlow: React.FC = () => {
  return (
    <Box id="results" width="100%" py="120px">
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal display="flex" flexDirection="column" alignItems="center">
            <Text
              color="primary"
              fontWeight="700"
              fontSize="5xl"
              lineHeight="48px"
              mb="3rem"
            >
              Process Flow
            </Text>
            <Text
              color="primary"
              fontWeight="700"
              fontSize="4xl"
              mb="3rem"
              lineHeight="48px"
            >
              No Registration Fees
            </Text>
          </Reveal>
          <Accordion defaultIndex={[0]} width="100%">
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Who Can Participate ?
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text fontSize="2xl">
                        School students can participate under two category:
                      </Text>
                      <UnorderedList fontSize="2xl">
                        <ListItem>Category I: Class 6th, 7th & 8th</ListItem>
                        <ListItem>Category II: Class 9 & Class 10</ListItem>
                        <ListItem>Category III: Class 11 & Class 12</ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        General Guidelines for Participation
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <UnorderedList fontSize="2xl">
                        <ListItem>
                          Each team would comprise 2 - 4 students.
                        </ListItem>
                        <ListItem>
                          One of the students from each team should act as a
                          Team Leader.
                        </ListItem>
                        <ListItem>
                          School photo ID is mandatory for participating in the
                          finale.
                        </ListItem>
                        <ListItem>One team can submit ONLY one idea.</ListItem>
                        <ListItem>
                          Team members CANNOT be associated with multiple teams
                          in parallel.
                        </ListItem>
                        <ListItem>
                          Team Name should be unique and not contain the name of
                          their school in any form.
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Grand Finale Prizes
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text fontSize="2xl">
                        The cash prize will be given to each category
                      </Text>
                      <UnorderedList fontSize="2xl">
                        <ListItem>First Prize : Rs 20,000/-</ListItem>
                        <ListItem>Second Prize : Rs 15,000/-</ListItem>
                        <ListItem>Third Prize : Rs 10,000/-</ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Important Dates
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <UnorderedList fontSize="2xl">
                        <ListItem>
                          Idea Submission Deadline: July 30, 2021
                        </ListItem>
                        <ListItem>
                          Shortlist for Idea Submission: August 3, 2021
                        </ListItem>
                        <ListItem>
                          Second Round Idea Presentation: August 5 & 6, 2021
                        </ListItem>
                        <ListItem>
                          Shortlist for Prototype Demonstration: August 10, 2021
                        </ListItem>
                        <ListItem>
                          Final Round Prototype Demonstration: August 20, 2021
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Shortlisted teams for Idea Presentation (Second Round)
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text fontSize="2xl">
                        We are happy to announce that your innovation idea has
                        been selected for Idea Presentation round (Second) in
                        National Innovative STEM Model Competition – 2021
                        Version 1.0. The presentation will be held category wise
                        on 5, 6 & 7 August 2021 through Zoom Meeting. The time
                        schedule & date will be informed you by WhatsApp group.
                      </Text>
                      <UnorderedList mt="0.5rem" fontSize="2xl">
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 1{" "}
                            <a
                              target="_blank"
                              href="/assets/Result for Category 1.pdf"
                            >
                              {" "}
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 2{" "}
                            <a
                              target="_blank"
                              href="/assets/Result for Category 2.pdf"
                            >
                              {" "}
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 3{" "}
                            <a
                              target="_blank"
                              href="/assets/Result for Category 3.pdf"
                            >
                              {" "}
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Shortlisted teams for Grand Finale (Third Round)
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text fontSize="2xl">
                        We are happy to announce that your innovation idea has
                        been selected for Grand Finale (Prototype
                        Demonstration/Working Model) in National Innovative STEM
                        Model Competition – 2021 Version 1.0.
                      </Text>
                      <Text fontSize="xl">
                        Note: You have to submit your Project Demonstration
                        Video (for 5 minutes) up to August 20, 2021. The video
                        will be uploading through Google form which will be sent
                        you earliest.
                      </Text>
                      <UnorderedList mt="0.5rem" fontSize="2xl">
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 1{" "}
                            <a target="_blank" href="/assets/final-1.jpeg">
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 2{" "}
                            <a target="_blank" href="/assets/final-2.jpeg">
                              {" "}
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex
                            mb="1rem"
                            alignItems="center"
                            maxW="600px"
                            justifyContent="space-between"
                          >
                            Category 3{" "}
                            <a target="_blank" href="/assets/final-3.jpeg">
                              {" "}
                              <Button bg="primary" color="white">
                                View
                              </Button>
                            </a>
                          </Flex>
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
          </Accordion>
          <Text mt="2rem" color="primary" fontSize="xl">
            Important Note : The competition will be either in offline or online
            mode depends on the prevailing COVID-19 situation.
          </Text>
          <Reveal mt="2rem" width="100%">
            <Text
              fontWeight="700"
              color="primary"
              textAlign="left"
              fontSize="3xl"
            >
              Venue
            </Text>
            <Text fontSize="2xl">
              Lakshmi Narain College of Technology, Bhopal Kalchuri Nagar,
              Raisen Road, Bhopal 462 021, (MP)
              <br /> Mobile Number: 9826856015, 7354549227 <br />
              Phone Number: +91-755-6185300
            </Text>
          </Reveal>
          <Reveal
            d="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            delay={0.4}
            mt="3rem"
          >
            <a href="https://bit.ly/SCHOOL-STEM-MODEL" target="_blank">
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
        </Flex>
      </Container>
    </Box>
  );
};

export default ProcessFlow;
