import React from "react";
import NoUser from "../../../assets/imgs/nouser.jpg";
import { Input, Button } from "../../Generics";
import { Checkbox } from "antd";
import { Img, Section, Container2, User } from "../style";

const Users = ({ data }) => {
  return (
    <Container2>
      <Section sec>
        <Img user src={NoUser} />
        <User>
          <div className="subTitle">
            {data?.user?.firstname} {data?.user?.lastname}
          </div>
          <div className="info">+(998) 99-690-20-03</div>
        </User>
      </Section>
      <Input
        borderBottom="1px solid #E6E9EC"
        border="none"
        placeholder="Name"
      />
      <Input
        borderBottom="1px solid #E6E9EC"
        border="none"
        placeholder="Phone"
      />
      <Input
        borderBottom="1px solid #E6E9EC"
        border="none"
        placeholder="Email"
      />
      <Input
        borderBottom="1px solid #E6E9EC"
        border="none"
        placeholder="Message"
      />
      <Checkbox>
        <div className="info">
          By submitting this form I agree to Terms of Use
        </div>
      </Checkbox>
      <Button width={"%"}>Send request</Button>
    </Container2>
  );
};

export default Users;
