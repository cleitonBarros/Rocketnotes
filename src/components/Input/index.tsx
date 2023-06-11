import React, { ComponentType, ReactElement } from "react";

import * as S from "./styled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}
export function Input({ icon, ...props }: InputProps) {
  return (
    <S.Container>
      {icon}
      <input {...props} />
    </S.Container>
  );
}
