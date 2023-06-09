import styled from "styled-components";

export interface ButtonTextContainerProps {
  isActive?: boolean;
}
export const Container = styled.button<ButtonTextContainerProps>`
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE};

  border: none;
  font-size: 1rem;
`;
