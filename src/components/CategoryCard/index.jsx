import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noImg from "../../assets/imgs/noimg.png";
import category from "../../assets/imgs/apartment.jpg";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    
    <Container onClick={onClick}>
      <Img src={category || noImg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

export default CategoryCard;
