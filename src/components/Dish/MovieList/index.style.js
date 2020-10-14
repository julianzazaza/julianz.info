import styled from "styled-components";

export const MovieWrapper = styled.div`
  padding: 10px;
  .already-watched-accordion,
  .icon {
    background-color: #72bbb4;
    color: #fdd0f1;
    padding-bottom: 20px;
  }
`;

export const CardStyle = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.poster})`};
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 300px;
  min-height: 450px;
  box-shadow: 10px 10px #499790;
  .card-text {
    h3 {
      margin: 0px;
      padding: 0 5px 0 5px;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #fdd0f1;
      color: black;
      font-size: 24px;
      font-style: italic;
      text-align: right;
      padding-right: 10px;
      box-shadow: 10px 10px #499790;
    }
    span {
      position: absolute;
      top: 0;
    }
  }
  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => (props.watched ? "#333" : null)};
    opacity: 0.8;
  }
`;

export const FocusedWrapper = styled.div`
  background-color: #fdd0f1;
  padding: 10px;
  color: black;
  box-shadow: 10px 10px #499790;
  h1 {
    font-style: italic;
    font-size: 48px;
  }
  h2 {
    font-style: italic;
    font-size: 24px;
  }
  span {
    font-size: 18px;
  }
`;
