import { createGlobalStyle } from "styled-components";
import Bemio from "./Bemio.otf";
import ApercuWoff from "./Apercu.woff";
import ApercuWoff2 from "./Apercu.woff2";

export default createGlobalStyle`
@font-face {
    font-family: 'Bemio';
    src: local('Bemio'),
    url(${Bemio}) format("opentype");
    font-weight: normal;
    font-style: normal;

}    
@font-face {
    font-family: 'Apercu';
    src: local('Apercu'),
    url(${ApercuWoff2}) format('woff2'),
    url(${ApercuWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
}
`;
