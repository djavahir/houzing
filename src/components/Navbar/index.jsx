import React from "react";
import { Link, Container, Logo, Section, Wrapper, Main, Menu } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/icon/logo.svg";
import navbar from "../../utils/navbar";
import Button from "../Generics/Button";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/signin");
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`${name}`);
    }
  };
  let token = localStorage.getItem("token");
  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My profile
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logos>
            <Logo src={logoImg} />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type={"dark"}>
                  <div>Profile</div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type={"dark"}>
                Sign in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
