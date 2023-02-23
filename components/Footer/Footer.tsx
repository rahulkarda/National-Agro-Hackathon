import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box width="100%" py="1rem">
      <Container>
        <Text color="gray.700" textAlign="center">
          Copyright © 2023 LNCT
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
