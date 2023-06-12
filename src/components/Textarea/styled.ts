import styled from "styled-components";
export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;

  resize: none;
  border: none;
  margin-bottom: 0.5rem;
  border-radius: 0.675rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
