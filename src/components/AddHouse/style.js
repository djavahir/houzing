import styled from "styled-components";
import { Select } from 'antd';
import { ReactComponent as trash } from "../../assets/icon/trash.svg";

const Wrapper = styled.div`
max-width: var(--width);
margin: auto;
width: 100%;
padding: var(--padding);
`;

const MenuWrapper = styled.div`
padding: 30px;
background:white ;
border: 1px solid #E6E9EC;
margin-bottom: 96px;
`;

const Section = styled.div`
margin-bottom: 20px;
display: flex;
gap: 20px;
flex-direction: ${({ fle }) => fle && 'column'};
font-size: ${({ fle }) => fle && '16px'};
color: ${({ fle }) => fle && 'red'};

`;

const Box = styled.div`
display: flex;
gap: ${({ im }) => im ? "20px" : '26px'} ;
flex-direction: ${({ im }) => !im && 'column'} ;
align-items: ${({ im }) => im && 'center'} ;
`;

const Wrap = styled.div`
display: flex;
justify-content: space-around;
margin-top: 25px;
margin-bottom: 32px;
padding: 48px 0;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

const SelectAnt = styled(Select)`
min-width: 200px;
width: 100%;
.ant-select-selector {
height: 44px !important;
display: flex !important;
align-items: center !important;
}`;

const Boxx = styled.div`
width: 35px;
height: 35px;
background: #F6F8F9;
border-radius: 50%;
position: relative;
`;

const Img = styled(trash)`
position: absolute;
top: 9px;
left: 9px;
cursor: pointer;
:active{
 transform: scale(0.9);
}
:hover{
 path{
 fill: ${({ fav }) =>
  fav && 'red'};
}
}`;




export { Wrapper, Img, Boxx, Box, Wrap, MenuWrapper, Section, SelectAnt }