import React from "react";
import { Link, Container, Logo, Section, Wrapper, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/icon/logo.svg";
import navbar from "../../utils/navbar";
import Button from "../Generics/Button";
import Filter from "../Filter";
import Footer from "../Footer";

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
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Sign in
            </Button>
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
