import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
  flex-wrap: wrap;
`;

ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;

ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;


export { ImageContainer, ImgContainer, Blur }