import React from "react";
import NoImg from "../../../assets/imgs/uy.jpg";
import { Blur, Content } from "../../Carousel/style";
import { Imgs, Container, Contents } from "./style";

const HousImgs = () => {
  return (
    <Container>
      <Imgs src={NoImg} />
      <Contents>
        <Imgs src={NoImg} />
        <Blur />
        <Content>
          <Content.Title>+15</Content.Title>
        </Content>
      </Contents>
    </Container>
  );
};

export default HousImgs;
