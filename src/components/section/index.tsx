import React from "react";

import * as S from "./styled";

interface SectionProps {
  children?: React.ReactNode;
  title: string;
}

export function Section({ children, title }: SectionProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      {children}
    </S.Container>
  );
}
