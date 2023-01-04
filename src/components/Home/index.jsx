import React from "react";
import Banner from "../Banner";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Resent from "../Resent";
import Why from "../Why";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Resent />
    </Container>
  );
};

export default Home;
