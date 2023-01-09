import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
align-items: center;

`;
const Content = styled.div`
display: flex;
flex-direction: column;
max-width: 580px;
padding: 30px;
gap: 30px;
background: white;
width: 100%;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin: 64px 0;
`;

const Span = styled.span`
color: red;
font-size: 20px;
`;

export { Container, Span, Content }