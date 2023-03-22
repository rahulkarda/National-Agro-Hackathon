import React from "react";
import {
  Container
} from "@chakra-ui/react";

const Result: React.FC = () => {
  return (
    <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }} p="120px 0 40px" display={"flex"} justifyContent="center">
    <iframe src="https://drive.google.com/file/d/1T3rtBb099U93EvABXK4v6DL6PNrLNhzo/preview?usp=sharing" 
                width="800" 
                height="500">
        </iframe>
    </Container>
  );
};

export default Result;
