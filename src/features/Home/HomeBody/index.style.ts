import styled from "styled-components";
import background from "static/backgrounds/130.png";

export const HomeBodyWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid black;
`;
