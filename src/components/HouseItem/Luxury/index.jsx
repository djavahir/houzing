import React from "react";
import {
  Box,
  Details,
  Container,
  Content,
  Img,
  Icons,
  Section,
  Description,
  Link,
} from "../style";
import Share from "../../../assets/icon/share.svg"
import Save from "../../../assets/icon/love.svg";
import Bed from "../../../assets/icon/bed.svg";
import Bath from "../../../assets/icon/bath.svg";
import Car from "../../../assets/icon/car.svg";
import Ruler from "../../../assets/icon/ruler.svg";
import Calendar from "../../../assets/icon/calendar.svg";
import Pdf from "../../../assets/icon/pdf.svg";

const Luxury = ({data}) => {
  return (
    <Container>
      <Section>
        <Content flex>
          <div className="title" style={{ textAlign: "start" }}>
            {data?.name}
          </div>
          <div className="info">
            {data?.city}, {data?.address}, {data?.country},
          </div>
        </Content>
        <Content img>
          <Box>
            <Img src={Share} />
            <div className="info">Share</div>
          </Box>
          <Box>
            <Img src={Save} />
            <div className="info">Save</div>
          </Box>
        </Content>
      </Section>
      <Section>
        <Details>
          <Details.Item>
            <Icons src={Bed} />
            <div className="info">{data?.houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Bath} />
            <div className="info">{data?.houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Car} />
            <div className="info">{data?.houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Ruler} />
            <div className="info">{data?.houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
          <Details.Item>
            <Icons src={Calendar} />
            <div className="info">
              Year Built:{data?.houseDetails?.yearBuilt || 0}{" "}
            </div>
          </Details.Item>
        </Details>
        <Section>
          <Content flex>
            <Content del>
              <div className="info">
                <del>${data?.price || 0}/mo</del>
              </div>
              <div className="subTitle">${data?.salePrice || 0}/mo</div>
            </Content>
            <Content flex>
              <div className="info">{data?.region}</div>
            </Content>
          </Content>
        </Section>
      </Section>
      <Description dec>
        <div className="subTitle">Description</div>
        <div info className="info">
          {data?.description}
        </div>
        <Link show >
          Show more
        </Link>
      </Description>
      <Description mb>
        <div className="subTitle">Documents</div>
      </Description>
      <Section doc>
        <Content.Box>
          <Img src={Pdf} />
          <div className="info">test_property.pdf</div>
          <Link >DOWNLOAD</Link>
        </Content.Box>
        <Content.Box>
          <Img src={Pdf} />
          <div className="info">test_property.pdf</div>
          <Link >DOWNLOAD</Link>
        </Content.Box>
        <Content.Box>
          <Img src={Pdf} />
          <div className="info">test_property.pdf</div>
          <Link >DOWNLOAD</Link>
        </Content.Box>
      </Section>
      <Description mb>
        <div className="subTitle">Location</div>
      </Description>
      <Section mar>
        <Content.Div>
          <Content.Box>
            <Content.Title>Address:</Content.Title>
            <div className="info">{data?.address}</div>
          </Content.Box>
          <Content.Box>
            <Content.Title>State/County:</Content.Title>
            <div className="info">{data?.region}</div>
          </Content.Box>
        </Content.Div>
        <Content.Div>
          <Content.Box>
            <Content.Title>City:</Content.Title>
            <div className="info">{data?.city}</div>
          </Content.Box>
          <Content.Box>
            <Content.Title>Zip:</Content.Title>
            <div className="info">{data?.zipCode}</div>
          </Content.Box>
        </Content.Div>
        <Content.Div>
          <Content.Box>
            <Content.Title>Area:</Content.Title>
            <div className="info">{data?.city}</div>
          </Content.Box>
          <Content.Box>
            <Content.Title>Country:</Content.Title>
            <div className="info">{data?.country}</div>
          </Content.Box>
        </Content.Div>
      </Section>
    </Container>
  );
};

export default Luxury;
