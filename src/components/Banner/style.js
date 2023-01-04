import styled from "styled-components";


const Container = styled.div`
height: fit-content;
position: relative;
`;

const Img = styled.img`
width: 100%;
height: 571px;
`;

const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.4);
`;

const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

Content.Title = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: white;
width: 566px;
height: 72px;
text-align: center;
`;

const Button = styled.button`
margin-top:24px;
width: 180px;
height: 44px;
border: none;
border-radius: 2px;
background:  #0061DF;
color: #FFFFFF;
font-family: 'Montserrat';
font-size: 14px;
:active{
 transform: scale(0.9);
}
cursor: grab;
`;


export { Container, Button, Img, Blur, Content }