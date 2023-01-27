import styled from "styled-components";


const Container = styled.div`
height: 400px;
display: flex;
flex-direction: column;
background: #F5F7FC;
width: 100%;
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
max-width: 539px;
`;
const SubTitle = styled.div`
letter-spacing: -0.02em;
font-weight: 600;
font-size: 28px;
line-height: 36px;
margin-top: 48px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 40px 130px;
width: 100%;
`;

const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
max-width: 230px;
width: 100%;
height: 230px;
text-align: center;
`;
const Img = styled.img`
margin-bottom: 24px;
`;

export { Container,Img, Content, Wrapper, Info, Title, SubTitle }