import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import HouseCard from "../HouseCard";
import { Container,Wrapper, Content } from "./style";
import { Button } from "../Generics";

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Wrapper>
      <Wrapper.Title>
        <Wrapper.SubTitle className="subTitle">Properties</Wrapper.SubTitle>
        <Wrapper.Info className="info">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Wrapper.Info>
      </Wrapper.Title>
      <Container>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
      <Content>
        <Button width={250}>Show more</Button>
      </Content>
    </Wrapper>
  );
};

export default Properties;
