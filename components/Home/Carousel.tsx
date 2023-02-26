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
      text: "Precision Agriculture",
      icon: "smart_system",
    },
    {
      text: "Supply Chain & Agriculture Logistics",
      icon: "waste",
    },
    {
      text: "Post-Harvest, Food Technology & Value addition",
      icon: "agriculture",
    },
    {
      text: "Waste to Wealth & Green Energy in Agricuture",
      icon: "renewable",
    },
    {
      text: "Miscellaneous",
      icon: "miscell",
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
