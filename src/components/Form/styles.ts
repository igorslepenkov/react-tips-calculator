import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  gap: 5%;
  grid-template-rows: repeat(5, 1fr);

  @media (min-width: 414px) {
    width: 331px;
  }

  @media (min-width: 744px) {
    width: 419px;
  }
`;

export const Total = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: start;

  @media (min-width: 744px) {
    font-size: 24px;
  }
`;
