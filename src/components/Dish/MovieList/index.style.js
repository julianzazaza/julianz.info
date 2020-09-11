import styled from "styled-components";

export const MovieWrapper = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;

  h2 span {
    background-color: #fdd0f1;
    border-radius: 4px;
    padding: 0.1em 0.2em;
    color: #72bbb4;
  }
  h1 span {
    background-color: #fdd0f1;
    border-radius: 8px;
    padding: 0.1em 0.2em;
    color: #72bbb4;
  }
`;
export const ButtonWrapper = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px;
  font-size: 20px;
  font-style: italic;
  margin: 0.5em 0.25em;
  padding: 0.25em 1em;
  &:active,
  &:visited {
    border: 0;
    background-color: #fdd0f1;
  }
`;

export const FocusedWrapper = styled.div`
  margin-bottom: 60px;
  p {
    padding: 0.5em;
  }
`;
