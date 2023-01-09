import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      onChange,
      name,
      value,
      defaultValue,
      width,
      height,
      placeholder,
      icon,
      onFocus,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          name={name}
          icon={icon}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
          onFocus={onFocus}
        />
      </Wrapper>
    );
  }
);

export default Input;
