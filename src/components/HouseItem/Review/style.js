import styled from "styled-components";

const Flex = styled.div`
display: flex;
justify-content: space-between;
gap: ${({wrap})=>wrap && '70px'};
gap: ${({wrapp})=>wrapp && '17px'};
gap: ${({wraps})=>wraps && '85px'};
gap: ${({wrapps})=>wrapps && '5px'};
margin-bottom: ${({wrapps})=>wrapps && '20px'};
`;
const Img = styled.img`

`;
export { Flex, Img }