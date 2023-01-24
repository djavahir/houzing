import React from "react";
import { Container, AntTabs } from "./style";
import Signin from "../SignIn";
import SignUp from "../Signup";

export const Register = () => {
  const items = [
    {
      key: "1",
      label: `Sign In`,
      children: <Signin />,
    },
    { 
      key: "2",
      label: `Sign Up`,
      children: <SignUp />,
    },
  ];

  return (
    <Container>
      <AntTabs defaultActiveKey="1" items={items} />
    </Container>
  );
};

export default Register;
