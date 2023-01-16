import React, { useState } from "react";
import { Container, Span, Content } from "../Signin/style";
import { Button, Input } from "../Generics";
import { useNavigate } from "react-router-dom";
import { Link } from "../HouseItem/style";

const Signin = () => {
  const [body, setBody] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = () => {
    setIsLoggedIn(true);
    fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoggedIn(false);
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoggedIn(false);
      });
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input
          onFocus={() => setError(false)}
          onChange={onChange}
          type="email"
          placeholder="email"
        />
        <Input
          onFocus={() => setError(false)}
          onChange={onChange}
          type="password"
          placeholder="password"
        />
        <Link signin href="">Forgot password?</Link>
        {error && <Span>email or password is incorrect!</Span>}
        <Button onClick={onSubmit} width="%">
          {isLoggedIn ? "waiting..." : "Login"}
        </Button>
      </Content>
    </Container>
  );
};

export default Signin;
