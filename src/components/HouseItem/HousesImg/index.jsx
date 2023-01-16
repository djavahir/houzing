import React from "react";
import Hous from "../../../assets/imgs/uylar.jpg";
import Houss from "../../../assets/imgs/uy.jpg";
import { Content, Content2, Img, Wrapper } from "./style";

const HousesImg = () => {
  return (
    <Wrapper>
      <Content>
        <Img src={Hous} />
      </Content>
      <Content2>
        <Img src={Houss} />
        <Img src={Houss} />
      </Content2>
    </Wrapper>
  );
};

export default HousesImg;
