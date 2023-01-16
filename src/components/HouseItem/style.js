import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: ${({ det }) => !det && 'auto'};
max-width: 880px;
width: 100%;
`;

const User = styled.div`
display: flex;
flex-direction: column;
gap: ${({ us }) => us && '10px'};

`;

const Container2 = styled.div`
max-width: 280px;
width: 100%;
height: 476px;
gap: 17px;
border:  1px solid #E6E9EC;
background: #FFFFFF;
border-radius: 3px;
padding: 24px;
display: flex;
flex-direction: column;
gap: 17px;
`;

const Boxs = styled.div`
display: flex;
flex-direction: ${({ dir }) => !dir && "column"};
gap: ${({ box }) => box ? '5px' : '24px'};
max-width: ${({ box }) => box && '380px'};
width: ${({ box }) => box && '100%'};
`;

const Wrapper = styled.div`
display: flex;
margin: auto;
gap: 20px;
padding: var(--padding);
max-width: var(--width);
width: 100%;
margin-top: ${({ bot }) => bot && '24px'};
`;

const Section = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: ${({ mar }) => mar && '24px'};
gap: ${({ sec }) => sec && '10px'};
padding-bottom: ${({ doc }) => doc && '48px'};
margin-bottom: ${({ doc }) => doc && '48px'};
border-bottom: ${({ doc }) => doc && '1px solid #e6e9ec'};
`;

const Content = styled.div`
display: flex;
flex-direction: ${({ flex }) => flex && 'column'};
gap: ${({ img }) => img && "26px"};
gap: ${({ del }) => del && "8px"};
text-align: ${({ flex }) => flex && "end"};
`;

Content.Box = styled.div`
display: flex;
gap: 8px;
`;

Content.Div = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

const Link = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-weight: ${({ show }) => show ? '400' : '600'};
font-size: ${({ show }) => show ? '14px' : '12px'};
line-height: 20px;
letter-spacing: 0.01em;
text-decoration-line: underline;
text-transform: uppercase;
color: #0061DF;
text-align:${({ signin }) => signin && 'center'};
margin-left: ${({ show }) => !show && '16px'};
:hover{
 color: #032c61;
}
`

Content.Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #0D263B;
`;

const Box = styled.div`
width: 86px;
height: 35px;
display: flex;
gap: 10px;
align-items: center;
`;

const Img = styled.img`
cursor: pointer;
:active{
 transform: scale(0.9);
}
width: ${({ user }) => user && "56px"};
border-radius: ${({ user }) => user && "50%"};
box-shadow: ${({ user }) => user && "0px 0px 10px rgba(13, 38, 59, 0.2);"};
height: ${({ user }) => user && "56px"};

`;
const Details = styled.div`
display: flex;
gap: 24px;
margin-top: 32px;
margin-bottom: 48px;
`;

Details.Item = styled.div`
display: flex;
gap: 8px;
`;

const Description = styled.div`
margin-bottom: ${({ mb }) => mb ? "24px" : "48px"};
display: flex;
flex-direction: column;
gap: 16px;
background: ${({ dec }) => dec && "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);"};
`;

const Wrapp = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 48px;
margin-bottom: 48px;
gap: ${({ gap }) => gap && '20px'};
border-bottom: ${({ bottom }) => !bottom && '1px solid #e6e9ec'};
flex-direction: ${({ gap }) => gap && 'column'};
`;

const Icons = styled.img``;
export { Wrapp, Boxs, Wrapper, User, Container, Icons, Details, Box, Section, Container2, Link, Description, Content, Img }