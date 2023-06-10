import styled from "styled-components";

export interface ButtonTextContainerProps {
  isActive?: boolean;
}
export const Container = styled.button<ButtonTextContainerProps>`
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 1rem;
`;
