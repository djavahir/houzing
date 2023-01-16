import React from "react";
import { Container, Description, Wrapp, Boxs } from "../style";
import { Option, Select } from "./style";
import { Input, Button } from "../../Generics";

const Schedule = () => {
  return (
    <Container det>
      <Description mb>
        <div className="subTitle">Schedule A Tour</div>
      </Description>
      <Wrapp>
        <Select oq>
          <Option value="">Date</Option>
          <Option value="">Month</Option>
          <Option value="">Year</Option>
        </Select>
        <Select>
          <Option value="">10:00 am</Option>
          <Option value="">11:00 am</Option>
          <Option value="">12:00 am</Option>
        </Select>
      </Wrapp>
      <Description mb>
        <div className="subTitle">Your Information</div>
      </Description>
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
            placeholder="Phone"
            type="number"
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
      <Wrapp>
        <Button width={"250"}>Submit a tour request</Button>
      </Wrapp>
    </Container>
  );
};

export default Schedule;
