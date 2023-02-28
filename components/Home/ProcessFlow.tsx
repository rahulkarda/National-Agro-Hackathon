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
    <Box id="results" width="100%" py="50px">
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
              fontSize="3xl"
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
                        fontSize="2xl"
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
                      <Text fontSize="1.4rem">
                      Regular Students of HEI's pursuing "Graduate/Post-Graduate/Ph.D" will be able to showcase their talent and generate out-of-the-box open innovation ideas.
                      </Text>
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
                        fontSize="2xl"
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
                      <UnorderedList fontSize="1.4rem">
                        <ListItem>
                        All team members should be from same college. However, members from different branches of the same college/ institute are encouraged to form a team. 
                        </ListItem>
                        <ListItem>
                         No inter-college teams are allowed.
                        </ListItem>
                        <ListItem>
                         Each team would mandatorily comprise of 2-4 members including the team leader. 
                        </ListItem>
                        <ListItem>College photo ID is mandatory for participating in the finale.</ListItem>
                        <ListItem>
                         One team can submit ONLY one idea.
                        </ListItem>
                        <ListItem>
                          Team members CANNOT be associated with multiple teams in parallel.
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
                        fontSize="2xl"
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
                      <Text fontSize="1.4rem">
                        The cash prize will be given to each category
                      </Text>
                      <UnorderedList fontSize="xl">
                        <ListItem>First Prize : Rs 25,000/-</ListItem>
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
                        fontSize="2xl"
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
                      <UnorderedList fontSize="xl">
                        <ListItem>
                          Idea Submission Deadline: 18 March, 2023
                        </ListItem>
                        <ListItem>
                          Shortlist for Idea Submission: 20, March, 2023
                        </ListItem>
                        <ListItem>
                          Final Round Prototype Demonstration: 31 March – 01 Arpil, 2023 (Nonstop 24 Hours)
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
          </Accordion>
          
          <Reveal mt="2.5rem" width="100%">
            <Text
              fontWeight="700"
              color="primary"
              textAlign="left"
              fontSize="2xl"
            >
              Venue
            </Text>
            <Text fontSize="xl">
              Lakshmi Narain College of Technology, Bhopal Kalchuri Nagar,
              Raisen Road, Bhopal 462 021, (MP)
              <br /> Mobile Number: 9826856015, 9753485817 <br />
              Phone Number: +91-755-6185300
            </Text>
          </Reveal>
          <Reveal
            d="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            delay={0.4}
            mt="3rem"
          >
            <a href="https://docs.google.com/forms/d/1FavIfjRwoKrMSjKz4mBV10UKIbiuJ1WMT7qyCKWGOkM/viewform" target="_blank">
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
