import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  align-content: center;
  min-width: fit-content;
  min-height: 28px;
  border: 2px solid #cecefb;
  outline: 2px solid black;
  background-color: #c0c0c0;
  padding-left: 5px;

  span {
    line-height: 28px;
    font-size: 18px;
    padding: 0 8px 0 8px;
  }
`;

export const SpanButSpecial = styled.span`
  float: right;
`;
