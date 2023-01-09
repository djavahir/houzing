import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";

const HouseItem = () => {
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }, [params?.id]);

  return (
    <Container>
      <h1>HouseItem</h1>
    </Container>
  );
};

export default HouseItem;
