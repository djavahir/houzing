import styled from "styled-components";


const Container = styled.div`
position: relative;
width: 100%;
max-width: 380px;
min-width: 343px;
height: 429px;
:hover{
filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.06)) drop-shadow(0px 7px 46px rgba(0,0,0,0.06))
drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
}
cursor: pointer;
border: 1px solid #E6E9EC;
border-radius: 3px;
background: white;
margin: ${({ gap }) => { return gap && `0 ${gap}px` }};
`;

const Img = styled.img`
width: 100%;
max-height: 220px;
min-height: 220px;
`;

const Content = styled.div`
padding: 0 20px;
padding: 14.8px 20px;
display: ${({ footer }) => footer && 'flex'};
justify-content: ${({ footer }) => footer && 'space-between'};

`;

const Details = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px;
`;

Details.Item = styled.div`
align-items: ${({ footer }) => !footer && 'center'};
display: flex;
gap: ${({ icon }) => icon && '20px'};
flex-direction: ${({ icon }) => !icon && 'column'};
`;

const Icons = styled.img``;

const Like = styled.img`
:active{
 transform: scale(0.9);
}
cursor: pointer;
`;


const Divider = styled.div`
background: #e6e9ec;
height: 1px;
width: 100%;
`;

const Button = styled.button`
position: absolute;
:active{
    transform:scale(0.9)
} 
background: ${({ right }) => right ? '#0D263B' : '#0061DF'};
border-radius: 3px;
border: none;
display:flex;
align-items:center; 
justify-content:center;
max-width: 71px;
width:100%;
height:100%;
max-height: 23px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
margin-top:20px;
left: ${({ right }) => !right && "20px"};
right: ${({ right }) => right && "20px"};
cursor: pointer;
`;

const User = styled.img`
width:38px;
height:38px;
border-radius:50%;
border:3px solid white;
position: absolute; 
right:23px;
bottom: 190px
`;

export { User, Container, Button, Img, Content, Details, Divider, Like, Icons }