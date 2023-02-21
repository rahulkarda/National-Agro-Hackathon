import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Flex, Img, Box, Text } from "@chakra-ui/react";

type Props = {
  //
};

const ThemeCarousel: React.FC<Props> = () => {
  const carouselData = [
    {
      text: "Agriculture",
      icon: "agriculture",
    },
    {
      text: "Public Transportation or Public Safety",
      icon: "transportation",
    },
    {
      text: "Home Automation & Application",
      icon: "smart_system",
    },
    {
      text: "Renewable Energy",
      icon: "renewable",
    },
    {
      text: "Waste Management",
      icon: "waste",
    },
    {
      text: "Open Innovation",
      icon: "open",
    },
  ];

  return (
    <Box mt="2rem" height="80%" width="100%">
      <Carousel
        className="carousel-wrapper"
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
      >
        {carouselData.map((item, i) => (
          <Flex
            key={`${i}-${item.text}`}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb="2rem"
            width="100%"
            height="100%"
          >
            <Img height="200px" src={`/assets/${item.icon}.svg`} />
            <Text fontSize="2xl" textAlign="center" mt="2rem" color="white">
              {item.text}
            </Text>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default ThemeCarousel;
