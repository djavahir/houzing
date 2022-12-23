import styled from "styled-components";

const Container = styled.div`
/* display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 20px; */

padding: var(--padding);
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
grid-gap: 20px;
max-width: 1440px;
margin: auto;
width: 100%;
`;
export { Container }