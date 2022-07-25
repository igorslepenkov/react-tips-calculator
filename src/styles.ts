import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background-color: rgba(234, 242, 242, 1);
`;

export const AppTitle = styled.h1`
  font-size: 24px;

  @media (min-width: 744px) {
    font-size: 40px;
  }
`;

export const AppSubtitle = styled.h2`
  font-size: 24px;
  color: rgba(117, 108, 108, 0.57);

  @media (min-width: 744px) {
    font-size: 32px;
  }
`;
