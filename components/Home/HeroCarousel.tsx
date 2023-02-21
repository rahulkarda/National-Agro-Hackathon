import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Flex, Img, Box } from "@chakra-ui/react";

const ThemeCarousel: React.FC<{}> = () => (
  <Box mt="6rem" height="70%" width="100%">
    <Carousel
      className="carousel-wrapper"
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showArrows={true}
    >
      {[...Array(10)].map((_item, i) => (
        <Flex key={i} px="1rem" height="100%" alignItems="center">
          <Img
            maxHeight="500px"
            maxWidth="100%"
            src={`/assets/gallery/${i + 1}.jpg`}
          />
        </Flex>
      ))}
    </Carousel>
  </Box>
);

export default ThemeCarousel;
