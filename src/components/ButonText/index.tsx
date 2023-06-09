import React from "react";

import * as S from "./styled";
import { ButtonTextContainerProps } from "./styled";

type ButtonTextProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonTextContainerProps & {
    title: string;
  };
export function ButtonText({
  title,
  isActive = false,
  ...props
}: ButtonTextProps) {
  return (
    <S.Container type="button" isActive={isActive} {...props}>
      {title}
    </S.Container>
  );
}
