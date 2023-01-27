import styled from "styled-components";

const Wrapper = styled.div`
height: 417px;
background: #0D263B;
`;

const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0 130px;
padding-top: 48px;
`;

const Info = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
max-width: 293px;
margin-bottom: ${({ info }) => !info && '20px'};
`;

const SubTitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: white;
margin-bottom: 32px;
`;

const H3 = styled.div`
color: white;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
`;

Content.Item = styled.div`
display: flex;
gap: 21px;
margin-bottom: 20px;
`

Content.Img = styled.div`
display: flex;
gap: 21px;
margin-top: 32px;
`

const Medium = styled.div`
width: 100%;
border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const Section = styled.div`
display: flex;
gap: ${({ gap }) => !gap ? "11px" : "73px"};
align-items: center;
padding-top: 16px;
`;

const Img = styled.img``;

const Last = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 130px;
padding-right: 11px;
`;

export { Container, Img, Content, Section, Wrapper, Medium, Last, H3, Info, SubTitle }