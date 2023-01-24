import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Trash from "../../assets/icon/trash.svg";
import Edit from "../../assets/icon/edit.svg";
import noImg from "../../assets/imgs/noimg.png";
import { Button } from "../Generics";
import {
  Container,
  Buttons,
  AntTables,
  Wrapper,
  Box,
  Img,
  Wrap,
  User,
  UserImg,
} from "./style";
import useRequest from "../../hooks/useRequest";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/me` }).then((res) => setData(res?.data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => {
        return (
          <User wid>
            <Buttons but>Featured</Buttons>
            <UserImg
              src={
                (data?.attachments && data?.attachments[0]?.imgPath) || noImg
              }
            />
            <User flex gapp>
              <User gpp>
                <User flex gp>
                  <div className="subTitle inlines">
                    {data.description}
                    {data.country}
                  </div>
                  <div className="info">{data.address}</div>
                </User>
                <Buttons rig>FOR SALE</Buttons>
              </User>
              <User flex>
                <div className="info">
                  <del>
                    <span>$</span>
                    {data.price}/mo
                  </del>
                </div>
                <div className="subTitle">
                  <span>$</span>
                  {data.salePrice}/mo
                </div>
              </User>
            </User>
          </User>
        );
      },
    },
    {
      title: "Year Built",
      render: (data) => data.houseDetails.yearBuilt,
      key: "yearBuilt",
      width: 150,
    },
    {
      title: "Price",
      render: (data) => <span> $ {data.price}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => data.user.email,
      key: "user.email",
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: () => {
        return (
          <Wrap>
            <Box>
              <Img src={Edit} />
            </Box>
            <Box>
              <Img src={Trash} />
            </Box>
          </Wrap>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <Wrapper.Title>
        <Wrapper.SubTitle className="subTitle">My properties</Wrapper.SubTitle>
        <Button onClick={() => navigate("/myprofile/newhouse")}>
          Add House
        </Button>
      </Wrapper.Title>
      <Container>
        <AntTables columns={columns} dataSource={data} />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
