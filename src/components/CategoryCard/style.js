import styled from "styled-components";

const Container = styled.div`
position: relative;
width: 100%;
max-width: 280px;
min-width: 230px;
max-height: 350px;
min-height: 320px;
border-radius: 3px;
border: 1px solid #E6E9EC;

box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);

`;

const Img = styled.img`
width: 100%;
`;

const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;
`;

const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.7);
border-radius: 3px;

`;


const Icons = styled.img``;

export { Container, Img, Blur, Content, Icons }