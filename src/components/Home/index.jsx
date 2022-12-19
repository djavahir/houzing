import React from "react";
import {Input} from "../Generics";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Input</h1>
      <Input placeholder={"test"} />
    </Container>
  );
};

export default Home;
