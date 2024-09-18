import styled from "styled-components";

export const Wrapper = styled.div<{ isLoginPage: boolean }>`
  display: flex;
  position: relative;
  visibility: ${(props) => (props.isLoginPage ? "hidden" : "visible")};
  flex-direction: column;
`;
