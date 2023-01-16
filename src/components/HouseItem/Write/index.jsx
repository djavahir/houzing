import React from "react";
import { Container, Description, Wrapp, Img, Boxs } from "../style";
import { Input, Button } from "../../Generics";
import Star from "../../../assets/icon/star.svg";
import { Flex } from "./style";

const Write = () => {
  return (
    <Container det>
      <Description mb>
        <div className="subTitle">Write a Review</div>
      </Description>
      <Wrapp bottom>
        <Boxs>
          <Flex wrap='true'>
            <div className="info">Cleanliness</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Communication</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Check-in</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
        </Boxs>
        <Boxs>
          <Flex wrap='true'>
            <div className="info">Accuracy</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Location</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Value</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
            </Flex>
          </Flex>
        </Boxs>
      </Wrapp>
      <Wrapp gap>
        <Boxs dir='true'>
          <Input
            borderBottom="1px solid #E6E9EC"
            border="none"
            placeholder="Name"
          />
          <Input
            borderBottom="1px solid #E6E9EC"
            border="none"
            placeholder="Email"
            type="email"
          />
        </Boxs>
        <div className="info">Enter Your Message</div>
      </Wrapp>
      <Wrapp bottom>
        <Button width={"250"}>Send your review</Button>
      </Wrapp>
    </Container>
  );
};

export default Write;
