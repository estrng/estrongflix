import styled, { css } from "styled-components";

export const Main = styled.main`
  background-color: var(--black);
  color: var(--mainText);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;
