import React from "react";
import Barbecue from "../../../assets/icon/barbecue.svg";
import Air from "../../../assets/icon/air.svg";
import Dryer from "../../../assets/icon/dryer.svg";
import Gym from "../../../assets/icon/gym.svg";
import Lawn from "../../../assets/icon/gras.svg";
import Laundry from "../../../assets/icon/laundry.svg";
import Microwave from "../../../assets/icon/microwave.svg";
import Shower from "../../../assets/icon/shower.svg";
import Refrigerator from "../../../assets/icon/refrigerator.svg";
import Sauna from "../../../assets/icon/sauna.svg";
import Swimming from "../../../assets/icon/swimmer.svg";
import Cable from "../../../assets/icon/cabel.svg";
import Soap from "../../../assets/icon/soap.svg";
import WiFi from "../../../assets/icon/wifi.svg";
import Blinds from "../../../assets/icon/blinds.svg";
import Room from "../../../assets/icon/chair.svg";
import { Container, Content, Img, Description, Boxs, Wrapp } from "../style";
const Details = ({ data }) => {
  return (
    <Container det>
      <Description mb>
        <div className="subTitle">Property Details</div>
      </Description>
      <Wrapp>
        <Boxs>
          <Content.Box col>
            <div className="subTitle">Property ID:</div>
            <div className="info">{data?.id}</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Price:</div>
            <div className="info">{data?.price}</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Property Size:</div>
            <div className="info">{data?.houseDetails?.area} Sq Ft</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Year Bulit:</div>
            <div className="info">{data?.houseDetails?.yearBuilt}</div>
          </Content.Box>
        </Boxs>
        <Boxs>
          <Content.Box col>
            <div className="subTitle">Bedrooms:</div>
            <div className="info">{data?.houseDetails?.beds}</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Bathrooms:</div>
            <div className="info">{data?.houseDetails?.bath}</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Garage:</div>
            <div className="info">{data?.houseDetails?.garage}</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Garage size:</div>
            <div className="info">{data?.houseDetails?.area} Sq Ft</div>
          </Content.Box>
        </Boxs>
        <Boxs>
          <Content.Box col>
            <div className="subTitle">Property Type:</div>
            <div className="info">Apartment</div>
          </Content.Box>
          <Content.Box col>
            <div className="subTitle">Property Status:</div>
            <div className="info">For Sale</div>
          </Content.Box>
        </Boxs>
      </Wrapp>
      <Description mb>
        <div className="subTitle">Features</div>
      </Description>
      <Wrapp>
        <Boxs>
          <Content.Box col>
            <Img src={Air} />
            <div className="info">Air Conditioning</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Barbecue} />
            <div className="info">Barbeque</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Dryer} />
            <div className="info">Dryer</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Gym} />
            <div className="info">Gym</div>
          </Content.Box>
        </Boxs>
        <Boxs>
          <Content.Box col>
            <Img src={Lawn} />
            <div className="info">Lawn</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Laundry} />
            <div className="info">Laundry</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Microwave} />
            <div className="info">Microwave</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Shower} />
            <div className="info">Outdoor Shower</div>
          </Content.Box>
        </Boxs>
        <Boxs>
          <Content.Box col>
            <Img src={Refrigerator} />
            <div className="info">Refrigerator</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Sauna} />
            <div className="info">Sauna</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Swimming} />
            <div className="info">Swimming Pool</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Cable} />
            <div className="info">TV Cable</div>
          </Content.Box>
        </Boxs>
        <Boxs>
          <Content.Box col>
            <Img src={Soap} />
            <div className="info">Washer</div>
          </Content.Box>
          <Content.Box col>
            <Img src={WiFi} />
            <div className="info">WiFi</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Blinds} />
            <div className="info">Window Coverings</div>
          </Content.Box>
          <Content.Box col>
            <Img src={Room} />
            <div className="info">Dining room</div>
          </Content.Box>
        </Boxs>
      </Wrapp>
    </Container>
  );
};

export default Details;
