import styled from "styled-components";

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
margin: 44px 0;
`;

const Span = styled.span`
color: red;
font-size: 20px;
text-align: center;
`;

export { Span, Content }