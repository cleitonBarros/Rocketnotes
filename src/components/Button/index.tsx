import React from "react";

import * as S from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "button" | "submit";
  isLoading?: boolean;
}

export function Button({
  title,
  type,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <S.Container type={type} disabled={isLoading} {...props}>
      {isLoading ? "Carregando..." : title}
    </S.Container>
  );
}
