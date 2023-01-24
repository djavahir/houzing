import styled from "styled-components";

const Container = styled.div`
padding: var(--padding);
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
grid-gap: 20px;
max-width: 1440px;
margin: auto;
width: 100%;
margin-bottom: 48px;

`;

const Wrapper = styled.div``;

Wrapper.SubTitle = styled.div`
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
margin-top: 64px;
`;

Wrapper.Info = styled.div`
font-size: 16px;
line-height: 24px;
margin-bottom: 32px;
max-width: 538px;
max-height: 24px;
`;

Wrapper.Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 8px;`;

export { Container, Wrapper }