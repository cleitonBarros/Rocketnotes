import React from "react";

import * as S from "./styled";

interface ButtonProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...props }: ButtonProps) {
  return (
    <S.Container disabled={isLoading} {...props}>
      {isLoading ? "Carregando..." : title}
    </S.Container>
  );
}
