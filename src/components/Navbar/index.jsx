import React from "react";
import { Button, Link, Container, Logo, Section, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/icon/logo.svg";
import navbar from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo src={logoImg} />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path, id }, index) => {
            return (
              <Link key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <Button>Sign in</Button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
