import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 5px 0.875rem;
  border-radius: 5px;
  margin-right: 6px;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
