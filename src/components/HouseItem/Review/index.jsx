import React from "react";
import { Boxs, Container, Description, Img, User, Wrapp } from "../style";
import { Flex } from "./style";
import Icon4_7 from "../../../assets/icon/4.7.svg";
import Icon4_9 from "../../../assets/icon/4.9.svg";
import Star from "../../../assets/icon/star.svg";
import NoUser from "../../../assets/imgs/nouser.jpg";

const Review = ({ data }) => {
  return (
    <Container det>
      <Description mb>
        <div className="subTitle">4.67 (14 reviews)</div>
      </Description>
      <Wrapp bottom>
        <Boxs>
          <Flex wrap='true'>
            <div className="info">Cleanliness</div>
            <Flex wrapp>
              <Img src={Icon4_7} />
              <div className="info">4.7</div>
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Communication</div>
            <Flex wrapp>
              <Img src={Icon4_9} />
              <div className="info">4.9</div>
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Check-in</div>
            <Flex wrapp>
              <Img src={Icon4_9} />
              <div className="info">4.9</div>
            </Flex>
          </Flex>
        </Boxs>
        <Boxs>
          <Flex wrap='true'>
            <div className="info">Accuracy</div>
            <Flex wrapp>
              <Img src={Icon4_7} />
              <div className="info">4.7</div>
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Location</div>
            <Flex wrapp>
              <Img src={Icon4_9} />
              <div className="info">4.9</div>
            </Flex>
          </Flex>
          <Flex wrap='true'>
            <div className="info">Value</div>
            <Flex wrapp>
              <Img src={Icon4_9} />
              <div className="info">4.9</div>
            </Flex>
          </Flex>
        </Boxs>
      </Wrapp>
      <Wrapp>
        <Boxs box>
          <User us>
            <Img user src={NoUser} />
            <div className="subTitle">
              {data?.user?.firstname} {data?.user?.lastname}
            </div>
          </User>
          <Flex wraps>
            <div className="info">April 6, 2021 at 3:21 AM</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <div className="info">(5 reviews)</div>
            </Flex>
          </Flex>
          <User width='true'>
            <div className="info">Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </div>
          </User>
        </Boxs>
        <Boxs box>
          <User us>
            <Img user src={NoUser} />
            <div className="subTitle">
              {data?.user?.firstname} {data?.user?.lastname}
            </div>
          </User>
          <Flex wraps>
            <div className="info">April 6, 2021 at 3:21 AM</div>
            <Flex wrapps>
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <Img src={Star} />
              <div className="info">(5 reviews)</div>
            </Flex>
          </Flex>
          <User>
            <div className="info">Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </div>
          </User>
        </Boxs>
      </Wrapp>
    </Container>
  );
};

export default Review;
