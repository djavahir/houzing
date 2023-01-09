import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "#FFFFFF"
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #E6E9EC",
        color: "#0D263B"
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF"
      };

    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF"
      };
  }
};

const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
height: ${({ height }) => height ? `${height}px` : "44px"};
width: ${({ width }) => width ? `${width}px` : "100%"};
padding-left: ${({ icon }) => icon ? `35px` : "16px"};
border-radius:2px;
border: 1px solid #E6E9EC ;
outline:none;
:focus{
border:1px solid #0061df;  
}

/* ${getType} */
`;

const Wrapper = styled.div`
position: relative;
width: ${({ width }) => width ? `${width}px` : "100%"};
display:flex;
align-items:center;
`;

const Icon = styled.div`
position: absolute;
left: 10px;
`;




export { Container, Wrapper, Icon }