import React, { useState } from "react";
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
import { useEffect } from "react";

const AddNewHouse = () => {
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const request = useRequest();

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([...imgs, img]);
      setImg("");
    }
  };
  const onChange = ({ target: { checked } }) => {
    console.log(`checked = ${checked}`);
  };

  useEffect(() => {
    request({
      url: "/houses",
      method: "POST",
      me: false,
    }).then((res) => setData(res?.data || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      houseDetails: {},
      homeAmenitiesDto: {},
    },
    onSubmit: (values) => {
      console.log(values);
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
              value={formik.values.area}
              name="area"
              onChange={formik.handleChange}
              placeholder={"Area"}
            />
            <Input
              value={formik.values.bath}
              name="bath"
              onChange={formik.handleChange}
              placeholder={"Bath"}
            />
            <Input
              value={formik.values.beds}
              name="beds"
              onChange={formik.handleChange}
              placeholder={"Beds"}
            />
            <Input
              value={formik.values.garage}
              name="garage"
              onChange={formik.handleChange}
              placeholder={"Garage"}
            />
            <Input
              value={formik.values.yearBuilt}
              name="yearBuilt"
              onChange={formik.handleChange}
              placeholder={"Year Built"}
            />
            <Input
              value={formik.values.room}
              name="room"
              onChange={formik.handleChange}
              placeholder={"Room"}
            />
            <SelectAnt
              value={formik.values.room}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {data.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value.id}>
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
              placeholder={"Zip Code"}
            />
            <Input
              value={formik.values.price}
              onChange={formik.handleChange}
              name="price"
              placeholder={"Price"}
            />
            <Input
              value={formik.values.salePrice}
              onChange={formik.handleChange}
              name="salePrice"
              placeholder={"Sale Price"}
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />
            <Button onClick={addImg} disabled={imgs.length >= 4}>
              Add Image URL
            </Button>
          </Section>
          <Section fle>
            {imgs.map((value) => {
              return (
                <Box im>
                  <pre>{value}</pre>
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
            <TextArea placeholder="description" name="description" />
          </Section>
          <h1 className="subTitle">Amenities</h1>
          <Wrap>
            <Box>
              <div>
                <Checkbox onChange={onChange}>Bus Stop</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Garden</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Market</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Park</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Parking</Checkbox>
              </div>
            </Box>
            <Box>
              <div>
                <Checkbox onChange={onChange}>School</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Stadium</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Subway</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Super Market</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>TV</Checkbox>
              </div>
            </Box>
            <Box>
              <div>
                <Checkbox onChange={onChange}>Air Condition</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Courtyard</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Furniture</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>GasStove</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Internet</Checkbox>
              </div>
            </Box>
          </Wrap>
          <Button>Save</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AddNewHouse;
