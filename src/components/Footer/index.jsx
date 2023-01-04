import React from "react";
import {
  Container,
  Content,
  Img,
  Info,
  Medium,
  Last,
  Section,
  SubTitle,
  Wrapper,
  H3,
} from "./style";
import Location from "../../assets/icon/location.svg";
import Phone from "../../assets/icon/phone.svg";
import Email from "../../assets/icon/email.svg";
import Facebook from "../../assets/icon/facebook.svg";
import Twiter from "../../assets/icon/twiter.svg";
import Instagram from "../../assets/icon/instagram.svg";
import In from "../../assets/icon/in.svg";
import logoImg from "../../assets/icon/logo.svg";
import Up from "../../assets/icon/up.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <SubTitle>Contact Us</SubTitle>
          <Content.Item>
            <Img src={Location} />
            <Info info>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </Info>
          </Content.Item>
          <Content.Item>
            <Img src={Phone} />
            <Info info>123 456 7890</Info>
          </Content.Item>
          <Content.Item>
            <Img src={Email} />
            <Info info>support@houzing.com</Info>
          </Content.Item>
          <Content.Img>
            <Img src={Facebook} />
            <Img src={Twiter} />
            <Img src={Instagram} />
            <Img src={In} />
          </Content.Img>
        </Content>
        <Content>
          <SubTitle>Discover</SubTitle>
          <Info>Chicago</Info>
          <Info>Los Angeles</Info>
          <Info>Miami</Info>
          <Info>New York</Info>
        </Content>
        <Content>
          <SubTitle>Lists by Category</SubTitle>
          <Info>Apartments</Info>
          <Info>Condos</Info>
          <Info>Houses</Info>
          <Info>Offices</Info>
          <Info>Retail</Info>
          <Info>Villas</Info>
        </Content>
        <Content>
          <SubTitle>Lists by Category</SubTitle>
          <Info>About Us</Info>
          <Info>Terms & Conditions</Info>
          <Info>Support Center</Info>
          <Info>Contact Us</Info>
        </Content>
      </Container>
      <Medium></Medium>
      <Last>
        <Section>
          <Img src={logoImg} />
          <H3>Houzing</H3>
        </Section>
        <Section gap>
          <Info info>Copyright © 2021 CreativeLayers. All Right Reserved.</Info>
          <Img src={Up} />
        </Section>
      </Last>
    </Wrapper>
  );
};

export default Footer;
