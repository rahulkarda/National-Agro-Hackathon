import React from 'react'

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';

const problemStatement: React.FC = () => {

    return (
        <Container maxW="container.xl" my="6rem" p="15">
            <Text fontSize={"xl"}>
                Note: Sample Format of Idea Presentation can be downloaded from {''}
                <Link 
                    style={{ color: "blue" }}
                    href='https://docs.google.com/presentation/d/18XASq0R4TaM1tGR5AI-wcv9Ka5g1zClU/edit#slide=id.p1' >
                    here.
                </Link>
            </Text>
            <Text fontSize={"2xl"} color="primary" mt="2rem">
                Themes
            </Text>
            <Accordion mt="5" border="2px solid #222" maxW="container.xl">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='primary' fontSize={"xl"}>
                                    1 : Precision Agriculture including applications of sensors, WSN, ICT, Artificial Intelligence, IoT & drone.
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Monitoring & management of water quality, soil fertility, and health, crop growth and health (pest and diseases, macro & micro-nutrients, water)</ListItem>
                            <ListItem fontSize={"xl"}>Variable Rate Technology (VRT) & Robotics</ListItem>
                            <ListItem fontSize={"xl"}>Precision livestock farming and aquaculture</ListItem>
                            <ListItem fontSize={"xl"}>Data analytics and digital extension including market intelligence</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='rgb(28%, 0%, 76%)' fontSize={"xl"}>
                                    2 : Supply Chain & Agriculture Logistics. 
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Blockchain technology for traceability of agri-produce from Farm to Fork.</ListItem>
                            <ListItem fontSize={"xl"}>Cost-effective sensor-based real-time monitoring & management of storage and transport system.</ListItem>
                            <ListItem fontSize={"xl"}>IT-based agriculture logistics including custom hiring services.</ListItem>
                            <ListItem fontSize={"xl"}>Reducing food waste.</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='rgb(28%, 0%, 76%)' fontSize={"xl"}>
                                    3 : Post-Harvest, Food Technology & Value addition.
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Development of devices for assessing quality, grading & sorting, processing of agri-produce.</ListItem>
                            <ListItem fontSize={"xl"}>Development of biodegradable and smart packaging materials.</ListItem>
                            <ListItem fontSize={"xl"}>Environment-friendly cost-effective mobile technologies at the farm gate for processing and value addition.</ListItem>
                            <ListItem fontSize={"xl"}>Manufacturing of functional, ethnic, alternate plant-based food and consumer products.</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='rgb(28%, 0%, 76%)' fontSize={"xl"}>
                                    4 : Waste to Wealth & Green Energy in Agriculture.
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Solar-powered technologies for farm operations and post-harvest drying and storage. </ListItem>
                            <ListItem fontSize={"xl"}>Green House Emission Gases on Agriculture through IoT System.</ListItem>
                            <ListItem fontSize={"xl"}>Improving animal health and welfare</ListItem>
                            <ListItem fontSize={"xl"}>Improving livestock health & welfare</ListItem>
                            <ListItem fontSize={"xl"}>Innovative products from agro-residues</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='rgb(28%, 0%, 76%)' fontSize={"xl"}>
                                    5 : Miscellaneous
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Multi tool career Agricultural Machinery for forming system.</ListItem>
                            <ListItem fontSize={"xl"}>Improving crop yield and reducing waste.</ListItem>
                            <ListItem fontSize={"xl"}>Mechanization in Soil Quality Improvement for Agricultural Machinery.</ListItem>
                            <ListItem fontSize={"xl"}>Enhancing sustainable farming practices.</ListItem>
                            <ListItem fontSize={"xl"}>Improving access to information for farmers & Increasing farmer income.</ListItem>
                            <ListItem fontSize={"xl"}>Improving animal health and welfare.</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                <Heading as='h2' size='1xl' color='rgb(28%, 0%, 76%)' fontSize={"xl"}>
                                    6 : Open innovation
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList>
                            <ListItem fontSize={"xl"}>Open innovation means finding innovative ideas to solve agriculture problems.</ListItem>
                            <ListItem fontSize={"xl"}>Participants can use open data and APIs to create new tools and technologies.</ListItem>
                            <ListItem fontSize={"xl"}>Participants can work together and share ideas.</ListItem>
                            <ListItem fontSize={"xl"}>Encourage people in agriculture to work together and share their knowledge.</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
        </Container>
    )
};
export default problemStatement;