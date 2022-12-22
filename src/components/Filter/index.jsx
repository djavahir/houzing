import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generics";
import { Container, Icons, MenuWrapper, Section } from "./style";
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const navigate = useNavigate();
  const location =useLocation()
  const query=useSearch()

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get('country')}
          name="country"
          ref={countryRef}
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('region')}
          name="region"
          ref={regionRef}
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('city')}
          name="city"
          ref={cityRef}
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get('zip_code')}
          name="zip_code"
          ref={zipRef}
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder={"Min price"} />
        <Input ref={maxPriceRef} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        dropdownRender={() => menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger={["click"]}
      >
        <div>
          <Button width={131} type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button width={240}>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
