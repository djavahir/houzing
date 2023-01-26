import styled from "styled-components";
import { Table } from 'antd';
import { ReactComponent as trash } from "../../assets/icon/trash.svg";
import { ReactComponent as edit } from "../../assets/icon/edit.svg";


const Container = styled.div`
display: flex;
width: 100%;
margin-bottom: 96px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding: 30px;
`;
const Wrapper = styled.div`
max-width: var(--width);
margin: auto;
width: 100%;
padding: var(--padding);
`;

Wrapper.SubTitle = styled.div`
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
`;

Wrapper.Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 34px 0;
`;

const AntTables = styled(Table)`
`;

const Box = styled.div`
width: 35px;
height: 35px;
background: #F6F8F9;
border-radius: 50%;
position: relative;
`;

const Wrap = styled.div`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
`;

const ImgTrash = styled(trash)`
position: absolute;
top: 9px;
left: 9px;
cursor: pointer;
:active{
 transform: scale(0.9);
}
:hover{
 & path{
  fill: red;
 }
}
`;

const ImgEdit = styled(edit)`
position: absolute;
top: 9px;
left: 9px;
cursor: pointer;
:active{
 transform: scale(0.9);
};
:hover{
 & path{
  fill: blue;
 }
}
`;

const UserImg = styled.img`
width: 113px;
height: 113px;
`;

const User = styled.div`
display: flex;
position: relative;
gap: ${({gp})=>gp && '4px'};
gap: ${({gpp})=>gpp && '24px'};
flex-direction: ${({ flex }) => flex && 'column'};
width: ${({ wid }) => wid && '450px'};
gap: ${({ wid }) => wid && '16px'};
gap: ${({ gapp }) => gapp && '21px'};
`;

const Buttons = styled.button`
position:${({but})=>but && 'absolute'};
:active{
 transform:scale(0.9)
} 
background: ${({ rig }) => rig ? '#0D263B' : '#0061DF'};
border-radius: 3px;
border: none;
width: 71px;
height: 23px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
margin: ${({ but }) => but && '4px'};
cursor: pointer;
`;

export { Container,ImgEdit, Buttons, User, UserImg, Wrap, Box, ImgTrash, Wrapper, AntTables }