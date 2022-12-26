import React from "react";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Why from "../Why";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      <Category />
    </Container>
  );
};

export default Home;
