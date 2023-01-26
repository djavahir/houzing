import React, { useEffect, useState } from "react";
import {
  Wrapper,
  MenuWrapper,
  Section,
  SelectAnt,
  Box,
  Wrap,
  Img,
  Boxx,
} from "./style";
import { Button, Input } from "../Generics";
import { useFormik } from "formik";
import useRequest from "../../hooks/useRequest";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate, useParams } from "react-router-dom";

const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
  });
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}` },
      ]);
      setImg("");
    }
  };

  // single house
  useEffect(() => {
    id &&
      request({ url: `/houses/id/${id}`, token: true }).then((res) => {
        setImgs(res?.data?.attachments);
        setInitial({ ...res?.data });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // category
  useEffect(() => {
    request({ url: "/categories/list" }).then((res) =>
      setCategory(res?.data || [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        me: false,
        body: { ...values, attachments: imgs },
      }).then((res) => {
        if (res?.success) {
          navigate("/myprofile");
        }
      });
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              value={formik.values.country}
              onChange={formik.handleChange}
              name="country"
              placeholder={"Country"}
            />
            <Input
              value={formik.values.region}
              onChange={formik.handleChange}
              name="region"
              placeholder={"Region"}
            />
            <Input
              value={formik.values.city}
              onChange={formik.handleChange}
              name="city"
              placeholder={"City"}
            />
            <Input
              value={formik.values.address}
              onChange={formik.handleChange}
              name="address"
              placeholder={"Address"}
            />
          </Section>
          <h1 className="subTitle">House Details</h1>
          <Section>
            <Input
              value={formik.values.houseDetails.area}
              name="houseDetails.area"
              onChange={formik.handleChange}
              placeholder={"Area"}
              type="number"
            />
            <Input
              value={formik.values.houseDetails.bath}
              type="number"
              name="houseDetails.bath"
              onChange={formik.handleChange}
              placeholder={"Bath"}
            />
            <Input
              value={formik.values.houseDetails.beds}
              type="number"
              name="houseDetails.beds"
              onChange={formik.handleChange}
              placeholder={"Beds"}
            />
            <Input
              value={formik.values.houseDetails.garage}
              type="number"
              name="houseDetails.garage"
              onChange={formik.handleChange}
              placeholder={"Garage"}
            />
            <Input
              value={formik.values.houseDetails.room}
              type="number"
              name="houseDetails.room"
              onChange={formik.handleChange}
              placeholder={"Room"}
            />
            <Input
              value={formik.values.houseDetails.yearBuilt}
              type="number"
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder={"Year Built"}
            />
            <SelectAnt
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              defaultValue="Select Category"
            >
              {category.map((value) => {
                return (
                  <SelectAnt.Option
                    onChange={formik.handleChange}
                    key={value.id}
                    value={value.id}
                  >
                    {value.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              placeholder={"Name"}
            />
            <Input
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              name="zipCode"
              type="number"
              placeholder={"Zip Code"}
            />
            <Input
              value={formik.values.price}
              onChange={formik.handleChange}
              name="price"
              type="number"
              placeholder={"Price"}
            />
            <Input
              value={formik.values.salePrice}
              onChange={formik.handleChange}
              name="salePrice"
              type="number"
              placeholder={"Sale Price"}
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />
            <Button type={"button"} onClick={addImg} disabled={imgs.length >= 4}>
              Add Image URL
            </Button>
          </Section>
          <Section fle>
            {imgs.map((value) => {
              return (
                <Box im>
                  <pre className="pre" style={{ cursor: "pointer" }}>
                    {value?.imgPath}
                  </pre>
                  <Boxx>
                    <Img
                      onClick={() => {
                        let res = imgs.filter((vl) => vl !== value);
                        setImgs(res);
                      }}
                      fav
                    />
                  </Boxx>
                </Box>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              placeholder="description"
              name="description"
              value={formik.values.description}
            />
          </Section>
          <h1 className="subTitle">Amenities</h1>
          <Wrap>
            <Box>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.busStop"
                >
                  Bus Stop
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.garden"
                >
                  Garden
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.market"
                >
                  Market
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.park"
                >
                  Park
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.parking"
                >
                  Parking
                </Checkbox>
              </div>
            </Box>
            <Box>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.school"
                >
                  School
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.stadium"
                >
                  Stadium
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.subway"
                >
                  Subway
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.superMarket"
                >
                  Super Market
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.tv"
                >
                  TV
                </Checkbox>
              </div>
            </Box>
            <Box>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.airCondition"
                >
                  Air Condition
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.courtyard"
                >
                  Courtyard
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.furniture"
                >
                  Furniture
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.gasStove"
                >
                  Gas Stove
                </Checkbox>
              </div>
              <div>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.internet"
                >
                  Internet
                </Checkbox>
              </div>
            </Box>
          </Wrap>
          <Section end="true">
            <Button>{id ? "Update" : "Save"}</Button>
          </Section>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
