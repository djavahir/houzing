import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Yandex from "../Generics/Yandex";
import Luxury from "./Luxury";
import Users from "./Users";
import Details from "./Details";
import Schedule from "./Schedule";
import Review from "./Review";
import Write from "./Write";
import Similar from "./Similar";
import HousesImg from "./HousesImg";

const HouseItem = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);


  return (
    <React.Fragment>
      <Wrapper bot>
        <HousesImg data={data} />
      </Wrapper>
      <Wrapper bot>
        <Luxury data={data} />
        <Users data={data} />
      </Wrapper>
      <Yandex />
      <Wrapper>
        <Details data={data} />
      </Wrapper>
      <Wrapper>
        <Schedule data={data} />
      </Wrapper>
      <Wrapper>
        <Review data={data} />
      </Wrapper>
      <Wrapper>
        <Write />
      </Wrapper>
      <Similar />
    </React.Fragment>
  );
};

export default HouseItem;
