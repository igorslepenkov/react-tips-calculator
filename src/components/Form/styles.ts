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

export const FormTitle = styled.h1`
  font-size: 24px;

  @media (min-width: 744px) {
    font-size: 40px;
  }
`;

export const FormSubtitle = styled.h2`
  font-size: 24px;
  color: rgba(117, 108, 108, 0.57);

  @media (min-width: 744px) {
    font-size: 32px;
  }
`;
