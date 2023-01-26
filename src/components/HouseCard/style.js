import styled from "styled-components";
import { ReactComponent as love } from "../../assets/icon/love.svg";


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

Icons.Love = styled(love)`
fill: red;
position: absolute;
top: 11px;
left: 9.5px;
background: ${({ fav }) => fav && 'red' };
path{
  fill: ${({ fav }) => fav ? 'white' : 'red'};
}
:active{
 transform: scale(0.9);
}
cursor: pointer;
`;

const Icon = styled.div`
width: 35px;
height: 35px;
background: #F6F8F9;
border-radius: 50%;
position: relative;
background: ${({ fav }) => fav && 'red'};

`;

const Like = styled.img`
position: absolute;
top: 11px;
left: 9.5px;
background: ${({ fav }) => fav && "red"};
path{
fill: ${({ fav }) => fav && "red"};
}
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

export { User, Container, Icon, Button, Img, Content, Details, Divider, Like, Icons }