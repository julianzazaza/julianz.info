import styled from "styled-components";
import background from "static/backgrounds/130.png";

export const HomeBodyWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: url(${background});
  background-repeat: repeat;
  min-width: 1080px;
  width: 100%;
  min-height: 1080px;
  height: 100%;
  overflow: hidden;
  border: 1px solid black;
`;
