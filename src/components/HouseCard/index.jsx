import React from "react";
import {
  Button,
  Container,
  Content,
  Details,
  Divider,
  Icons,
  Img,
  Like,
  User,
} from "./style";
import noImg from "../../assets/imgs/noimg.png";
import user from "../../assets/imgs/user.png";
import Bed from "../../assets/icon/bed.svg";
import Bath from "../../assets/icon/bath.svg";
import Car from "../../assets/icon/car.svg";
import Ruler from "../../assets/icon/ruler.svg";
import Love from "../../assets/icon/love.svg";
import Resize from "../../assets/icon/resize.svg";

const HouseCard = ({ data = {} }) => {
  const {
    address,
    houseDetails,
    salePrice,
    price,
    city,
    attachments,
    country,
    description,
  } = data;
  return (
    <Container>
      <Button>Featured</Button>
      <Button right>For sale</Button>
      <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
      <Content>
        <User src={(attachments && attachments[1]?.imgPath) || user} />
        <div className="subTitle inline">
          {city},{country},{description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons src={Bed} />
            <div className="info">{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Bath} />
            <div className="info">{houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Car} />
            <div className="info">{houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Ruler} />
            <div className="info">{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">
            <del>${price || 0}/mo</del>
          </div>
          <div className="subTitle">${salePrice || 0}/mo</div>
        </Details.Item>
        <Details.Item icon>
          <Like src={Resize} />
          <Like src={Love} />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
