import { createGlobalStyle } from "styled-components";
import sysfont from "./sysfont.otf";

export default createGlobalStyle`
@font-face {
    font-family: 'sysfont';
    src: local('sysfont'),
    url(${sysfont}) format("opentype");
    font-weight: normal;
    font-style: normal;

}
`;
