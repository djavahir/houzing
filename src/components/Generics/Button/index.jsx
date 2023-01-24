import React from "react";
import { Container } from "./style";

const Button = ({ width,disabled, height, children, type, onClick }) => {
  return (
    <Container disabled={disabled} width={width} height={height} onClick={onClick} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
