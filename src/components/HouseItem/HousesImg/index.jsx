import React from "react";
import NoImg from "../../../assets/imgs/noimg.png";
import { ImageContainer, ImgContainer,Blur } from "./style";

const HousesImg = ({ data }) => {
  return (
    <ImageContainer>
      <ImageContainer.Main
        src={(data?.attachments && data?.attachments[0]?.imgPath) || NoImg}
        alt="test"
      />
      <ImgContainer>
        {data?.attachments &&
          data?.attachments?.slice(1, 5).map((value, index) => {
            return data?.attachments?.length > 5 && index === 3 ? (
              <Blur.Container>
                <ImageContainer.Subimg
                  key={value.id}
                  src={value?.imgPath}
                  alt="test"
                />
                <Blur>+{data?.attachments?.length - 5}</Blur>
              </Blur.Container>
            ) : (
              <ImageContainer.Subimg
                key={value.id}
                src={value?.imgPath}
                alt="test"
              />
            );
          })}
      </ImgContainer>
    </ImageContainer>
  );
};

export default HousesImg;
