import { useState, InputHTMLAttributes } from "react";
import * as C from "./styles";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <C.InputContainer>
      <input {...props} />
    </C.InputContainer>
  );
};

export default Input;
