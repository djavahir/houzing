import React, { useRef } from "react";
import { Arrow, Blur,Button, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import Img1 from "../../assets/imgs/house1.jpg";
import Img2 from "../../assets/imgs/house2.jpg";
import Left from "../../assets/icon/leftNext.svg";
import Right from "../../assets/icon/rightNext.svg";

const GenCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") slider.current.prev();
    if (name === "right") slider.current.next();
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={Img1} />
        <Img src={Img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston,MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
        <Button>Read more</Button>
      </Content>
      <Arrow src={Left} onClick={onMove} data-name={"left"} />
      <Arrow src={Right} onClick={onMove} data-name={"right"} next />
    </Container>
  );
};

export default GenCarousel;
