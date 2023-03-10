import React, { useContext } from "react";
import {
  Button,
  Container,
  Content,
  Details,
  Divider,
  Icon,
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
import Resize from "../../assets/icon/resize.svg";
import { message } from "antd";
import { PropertiesContext } from "../../context/properties";
import { useNavigate } from "react-router-dom";

const HouseCard = ({ data = {}, gap, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const navigate = useNavigate();
  const {
    address,
    houseDetails,
    salePrice,
    price,
    city,
    attachments,
    country,
    description,
    category,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Successfully disliked");
        else res?.success && message.info("Successfully liked");
        refetch && refetch();
      });
  };

  const onFeatured = (event) => {
    event.stopPropagation();
    navigate(`/favourite`);
  };
  const onForSale = (event) => {
    event.stopPropagation();
    navigate(`/properties/${id}`);
  };

  return (
    <div style={{ display: "flex" }} onClick={onClick}>
      <Container gap={gap}>
        <Button onClick={onFeatured}>Featured</Button>
        <Button onClick={onForSale} right>
          For sale
        </Button>
        <Img src={(attachments && attachments[0]?.imgPath) || noImg} />
        <Content>
          <User src={(attachments && attachments[1]?.imgPath) || user} />
          <div className="subTitle inline">
            {city},{country},{description}
          </div>
          <div className="info">
            {address || "Quincy St, Brooklyn, NY, USA"} -
            {category?.name || "category"} {houseDetails?.room || 0}-rooms
          </div>
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
            <Icon>
              <Like src={Resize} />
            </Icon>
            <Icon fav={favorite} >
              <Icons.Love onClick={save} fav={favorite} />
            </Icon>
          </Details.Item>
        </Content>
      </Container>
    </div>
  );
};

export default HouseCard;
