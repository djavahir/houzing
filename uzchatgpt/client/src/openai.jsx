import React, { useState } from "react";
import "./index.css";
import {
  Body,
  Button,
  Container,
  Footer,
  Input,
  Main,
  Sidebar,
  Svg,
  Wrapper,
} from "./style";

const OpenAi = () => {
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");

  const Press = (e) => {
    if (e.key === "Enter") {
      setChats([...chats, { type: "user", message: e.target.value }]);
      setValue("");
      fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      })
        .then((res) => res.json())
        .then((res) => setChats((ch) => [...ch, { type: "ai", message: res }]));
    }
  };

  return (
    <Wrapper>
      <Sidebar>
        <Button> + New chat</Button>
      </Sidebar>
      <Body>
        <Container>
          <Main>
            {chats.map((value) => {
              return <div className={value.type}>{value.message}</div>;
            })}
          </Main>
          <Footer>
            <Input
              type="text"
              value={value}
              onKeyDown={Press}
              onChange={(e) => setValue(e.target.value)}
              placeholder="What your want to search?"
            />
            <Svg viewBox="0 0 20 20">
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                fill="white"
              />
            </Svg>
          </Footer>
        </Container>
      </Body>
    </Wrapper>
  );
};

export default OpenAi;

// sk-vAEVF8qfxK1f2AkQweaT3BlbkFJyu5wdibZ7v1AxNtQzTE7
