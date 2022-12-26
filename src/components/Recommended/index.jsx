import React, { useEffect, useState } from "react";
import { Container, Info, SubTitle, Title } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 2.7,
  speed: 500,
  arrows: true,
  dots: true,
  appenDots: (dots) => <h1>{dots}</h1>,
};
const Recommended = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Title>
        <SubTitle className="subTitle">Recommended</SubTitle>
        <Info className="info">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Info>
      </Title>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              gap={20}
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
