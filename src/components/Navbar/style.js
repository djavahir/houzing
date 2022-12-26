import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Main = styled.div`
display: flex;
justify-content: center;
background: var(--colorPrimary);
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #ffff;
padding: var(--padding);
height: 64px;
font-size: 16px;
max-width: 1440px;
width: 100%;
`;

const Section = styled.div`
display: flex;
align-items: center;
gap: 11.62px;
cursor: ${({ logos }) => logos && 'pointer'};
.active{
 color: yellowgreen;
}
`;


const Logo = styled.img`
width: 30.39px;
height: 36px;
`;

const Link = styled(NavLink)`
text-decoration:none;
padding: 0 32px;
color: #ffff;
`;

export { Main, Container, Wrapper, Section, Logo, Link }