import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.56rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Links = styled.ul`
  > li {
    margin: 0.75rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
