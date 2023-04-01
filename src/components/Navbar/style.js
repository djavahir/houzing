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
position: sticky;
top: 0;
z-index: 999;
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
 color: skyblue;
}
`;


const Logo = styled.img`
width: 30.39px;
height: 36px;
`;

const Link = styled(NavLink)`
text-decoration:none;
padding: 0 32px;
color: #fff;
`;

const Menu = styled.div`
background: #FFFFFF;
width: 177px;
border-radius: 5px;
padding: 16px;
display: flex;
flex-direction: column;
gap: 16px;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000000;
cursor: pointer;
`;

export { Main, Menu, Container, Wrapper, Section, Logo, Link }