import styled from "styled-components";


const Container = styled.div`
position: relative;
padding: 96px 130px;
max-width: 1440px;
width: 100%;
display: flex;
margin: auto;
flex-direction: column;
`;

const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 8px;
`;

const Info = styled.div`
font-size: 16px;
line-height: 24px;
margin-bottom: 32px;
max-width: 539px;
max-height: 24px;
`;
const SubTitle = styled.div`
letter-spacing: -0.02em;
font-weight: 600;
font-size: 28px;
line-height: 36px;
`;


export { Container, Info, Title, SubTitle }