import styled from "styled-components";

const Option = styled.option`
display: flex;
flex-direction: column;
`;
const Select = styled.select`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
max-width: 430px;
width: 100%;
height: 30px;
border: none;
border-bottom: ${({ oq }) => oq ? '2px solid #E6E9EC' : '2px solid  #0061DF'};
`;
export { Option, Select }