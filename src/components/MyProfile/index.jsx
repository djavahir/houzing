import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import noImg from "../../assets/imgs/noimg.png";
import { Button } from "../Generics";
import {
  Container,
  Buttons,
  AntTables,
  Wrapper,
  Box,
  Wrap,
  User,
  UserImg,
  ImgEdit,
  ImgTrash,
} from "./style";
import useRequest from "../../hooks/useRequest";
import { useQuery } from "react-query";
import { message } from "antd";

const MyProfile = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully Delete");
          refetch();
        }
      }
    );
  };

  const onFeatured = () => {
    navigate("/favourite");
  };

  const onForSale = () => {
    navigate("/properties");
  };

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => {
        return (
          <User wid>
            <Buttons onClick={onFeatured} but>
              Featured
            </Buttons>
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
                <Buttons onClick={onForSale} rig>
                  FOR SALE
                </Buttons>
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
      render: (data) => {
        return (
          <Wrap>
            <Box
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/editHouse/${data?.id}`);
              }}
            >
              <ImgEdit
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(`/myprofile/editHouse/${data?.id}`);
                }}
              />
            </Box>
            <Box
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            >
              <ImgTrash
                onClick={(event) => {
                  event.stopPropagation();
                  onDelete(data?.id);
                }}
              />
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
        <AntTables
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          columns={columns}
          dataSource={data?.data}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
