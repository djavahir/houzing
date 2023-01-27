import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { PropertiesContext } from "../../context/properties";
import HouseCard from "../HouseCard";
import { Box, Container, Wrap, Wrapper } from "./style";
import {Button} from "../Generics"
const { REACT_APP_BASE_URL } = process.env;

const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await res.json();
    },

    {
      onSuccess: () => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  const onRegister=()=>{
    navigate(`/signin`);

  }

  return (
    <Wrapper>
      <Wrapper.Title>
        <Wrapper.SubTitle className="subTitle">Favourite</Wrapper.SubTitle>
        <Wrapper.Info className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Wrapper.Info>
      </Wrapper.Title>
      <Container>
        {data?.data?.length ? (
          data?.data?.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <Box>
            <h1>No Data Found</h1>
            <Wrap>
              <Button onClick={onRegister} width={200}>Register</Button>
            </Wrap>
          </Box>
        )}
      </Container>
    </Wrapper>
  );
};

export default Favourite;
