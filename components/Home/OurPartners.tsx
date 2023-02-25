import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Container, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import Reveal from "../library/Reveal";

const OurPartners: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Box
      width="100%"
      py={{ xs: "60px", lg: "120px" }}
      bg="linear-gradient(180deg,#6454f0 10%,#6ee2f5 110%)"
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal
            flexDirection={{ xs: "column-reverse", sm: "row" }}
            width="100%"
            mb="2rem"
            display="flex"
          >
            <Box width={{ md: "50%" }}>
              <Text
                mb={{ xs: "2rem", sm: "0" }}
                mr={{ sm: "2rem" }}
                color="white"
                as="h1"
                mt={{ xs: "1rem", md: "-3rem" }}
                fontSize={{ xs: "2xl", lg: "3xl" }}
                fontWeight="700"
              >
                About National Agro Hackathon – 2023 Version 1.0
              </Text>
              <Text
                textAlign="justify"
                fontSize={{ xs: "1xl", md: "1.2rem" }}
                color="white"
                mr={{ sm: "2rem" }}
              >
                Hackathon competitions allow for student teams to solve a specific challenge or problem through
                science, technology, engineering, or mathematics. Many of these
                challenges are rooted in real-world issues, encouraging
                participants to use creativity and critical thinking in order to
                come up with innovative solutions. <br /> <br />
                
                The Agriculture Hackathon will provide a platform for participants to collaborate and work with like-minded individuals, learn from industry experts and gain valuable exposure to the latest technologies and trends in agriculture. 
              </Text>
            </Box>
            <Box
              width={{ xs: "345px", sm: "633px" }}
              maxWidth="100%"
              height={{ xs: "184px", lg: "348px" }}
            >
              {loaded && (
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  light={true}
                  url="https://www.youtube.com/watch?v=CtNDtUeVqd8"
                />
              )}
            </Box>
          </Reveal>
          <Reveal>
            <Text
              color="white"
              fontWeight="700"
              fontSize={{ xs: "2xl", lg: "3xl" }}
              mb="1rem"
            >
              ABOUT LNCT GROUP
            </Text>
            <Text
              textAlign="justify"
              fontSize={{ xs: "1xl", md: "1.2rem" }}
              color="white"
              mb="3rem"
            >
              LNCT Group of Colleges is ones of the oldest and largest education
              groups in central India. Founded in 1994 Lakshmi Narain College of
              Technology, Bhopal has the privilege of being the First Private
              (self-financed) institute of M.P. LNCT Group offers program from
              Diploma, Bachelor, Master's and Doctorate­ level programs with
              campuses in five locations in Madhya Pradesh & Chhattisgarh
              including the cities of Bhopal, Indore, Gwalior, Jabalpur and
              Bilaspur. <br /> <br />
              
              LNCT Group of College to meet the ever increasing
              demands for higher education in India. LNCT Group is one of the
              Group institutes of its size in the India to offer program in 5
              varied field study: Engineering, Management, Pharmacy, Medical,
              Homeopathy, Dental and recurring and professional studies.

              <br /> <br />

              Education is not the only area we work in. We also so take
              responsibility for the improvement of community around us. This
              instills in the students a feeling of responsibility and concern
              and makes them comprehend the world a bit better. Each one is
              better endowed to face the world and the satisfaction of having
              fulfilled their social responsibility is an added bonus. LNCT
              Bhopal campus is the historic campus in Bhopal, which dates from
              1994.
            </Text>
          </Reveal>
          <Reveal width="100%">
            <a href="https://lnct.ac.in/" target="_blank">
              <Button variant="outline" color="white" p="1.5rem 2rem">
                Know More
              </Button>
            </a>
          </Reveal>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPartners;
