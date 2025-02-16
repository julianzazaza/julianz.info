import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-color: #384b87;
  color: #f49c77;
  display: flex;
  justify-content: center;
  // font-family: "Helvetica";
  h3 {
    font-weight: 200;
  }
  h5 {
    font-weight: 250;
    font-size: 18px;
  }
  a:link,
  a:visited {
    color: #f49c77;
    text-decoration: underline;
  }
  a:hover,
  a:active {
    background-color: #f49c77;
    color: #384b87;
  }
`;

export const HomeTitle = styled.h1`
  font-family: "Bemio";
  font-size: 48px;
  font-weight: 300;
  font-style: normal;
  padding: 0 4px 0 4px;
`;

export const HomeBody = styled.div`
  font-family: "Apercu";
  padding: 0 4px 0 4px;
`;

export const HomeLogo = styled.img`
  max-width: 100%;
  text-align: center;
  height: auto;
  padding: 2em;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const HomeGrid = styled.div`
  // margin: auto
  // width: 70%;
`;
