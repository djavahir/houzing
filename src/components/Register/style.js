import styled from "styled-components";
import { Tabs } from "antd";


const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
align-items: center;
`;

const AntTabs = styled(Tabs)`
margin-top: 64px;
max-width: 580px;
width: 100%;
color: red;
`;

export { Container, AntTabs }