import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  name,
  value,
  defaultValue,
  width,
  height,
  placeholder,
}) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
