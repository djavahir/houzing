import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
height: 100vh;
`;

const Sidebar = styled.div`
max-width: 250px;
width: 100%;
color: white;
background-color: #202123;
`;

const Body = styled.div`
background-color: #343541;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
padding: 50px;
`;

const Footer = styled.div`
display: flex;
position: relative;
`;

const Main = styled.div`

`;

const Svg = styled.svg`
width: 2em;
height: 2em;
color: white;
fill: currentColor;
position: absolute;
transform: rotate(44deg);
right: 15px;
top: 30%;
cursor: pointer;
opacity: 0.4;
:hover{
  opacity: 1;
  fill: white;
  transition-duration: 0.3s;
}

`;

const Input = styled.input`
width: 100%;
outline: none;
border: none;
border-radius: 3px;
height: 46px;
padding-right: 55px;
padding-left: 15px;
background-color: rgba( 64, 65, 79, 1 );
color: white;
font-size: 18px;
`;

const Button = styled.div`
background: none;
margin: 12px;
padding: 12px;
text-align: start;
font-size: 15px;
border-radius: 4px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
background-color: hsla(240, 9%, 59%, 0.1);
border: 0.5px solid hsla(0, 0%, 100%, 0.2);
color: white;
cursor: pointer;
:active{
  transform: scale(0.9);
}
:hover{
border: 0.5px solid hsla(0, 0%, 100%, 0.2);
background-color: hsla(240, 9%, 59%, 0.4);
transition-duration: 0.3s;
}
`;

const Container = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
flex-direction: column;
`;

export { Wrapper, Svg, Input, Button, Container, Main, Sidebar, Body, Footer }