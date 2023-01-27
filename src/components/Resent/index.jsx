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
  // dots: true,
  // infinite: false,
  // speed: 300,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // initialSlide: 0,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
};
const Resent = () => {
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
    <Container >
      <Title>
        <SubTitle className="subTitle">Recent Properties for Rent</SubTitle>
        <Info className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Info>
      </Title>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              gap={20}
              onClick={() => navigate(`/properties/${value?.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Resent;
