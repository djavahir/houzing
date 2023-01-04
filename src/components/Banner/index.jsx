import React from "react";
import { Blur,Button, Container, Content, Img } from "./style";
import Img1 from "../../assets/imgs/banner.jpg";

const Banner = () => {
  return (
    <Container>
        <Img src={Img1} />
      <Blur />
      <Content>
        <Content.Title>Vermont Farmhouse With Antique Jail Is
the Week's Most Popular Home</Content.Title>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;
