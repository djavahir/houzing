import React from "react";
import {
  Container,
  Content,
  Img,
  Info,
  SubTitle,
  Title,
  Wrapper,
} from "./style";
import Discord from "../../assets/icon/discord.svg";
import Home from "../../assets/icon/home.svg";
import Calculator from "../../assets/icon/calculator.svg";
import Maps from "../../assets/icon/maps.svg";

const Why = () => {
  return (
    <Container>
      <Title>
        <SubTitle className="subTitle">Why Choose Us?</SubTitle>
        <Info className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Info>
      </Title>
      <Wrapper>
        <Content>
          <Img src={Discord} />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="info add">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Img src={Home} />
          <div className="subTitle">Wide Renge Of Properties</div>
          <div className="info add">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Img src={Calculator} />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info add">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Img src={Maps} />
          <div className="subTitle">See Neighborhoods</div>
          <div className="info add">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
