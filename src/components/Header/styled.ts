import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 5rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5.5rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 3.56rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  strong {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.5rem;
  }
`;
