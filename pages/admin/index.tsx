import type { NextPage } from "next";
import * as React from "react";
import { Box, Button, Container } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Button variant="contained">Hello World</Button>
        <Button variant="contained">Hello World</Button>
      </Box>
    </Container>
  );
};

export default Home;
