import React from "react";
import { Button, Link, Container, Logo, Section, Wrapper, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/icon/logo.svg";
import navbar from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logos>
            <Logo src={logoImg} />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => {
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
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
