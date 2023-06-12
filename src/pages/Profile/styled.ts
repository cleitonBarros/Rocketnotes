import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 7.75rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  margin: 1.9rem auto 0;

  > div:nth-child(4) {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -7.75rem auto 1.5rem;
  width: 12rem;
  height: 12rem;

  > img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }
    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
