import { createGlobalStyle } from 'styled-components';
import sysfont from './sysfont.otf';
import AmericanTypewriter from './AmericanTypewriter.otf';
export default createGlobalStyle`
@font-face {
    font-family: 'sysfont';
    src: local('sysfont'),
    url(${sysfont}) format("opentype");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'AmericanTypewriter';
    src: local('AmericanTypewriter'),
    url(${AmericanTypewriter}) format("opentype");
    font-weight: normal;
    font-style: normal;
}
`;
