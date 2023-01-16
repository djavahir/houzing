import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
max-width: 880px;
width: 100%;
height: 400px;
gap: 20px;
`;
const Content = styled.div`
display: flex;
max-width: 580px;
height: 100%;
width: 100%;
`;
const Content2 = styled.div`
display: flex;
flex-direction: column;
max-width: 280px;
height: 100%;
gap: 20px;
width: 100%;
`;

const Img = styled.img`
width: 100%;
`;
export { Img,Content,Content2, Wrapper }