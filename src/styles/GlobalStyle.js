import { createGlobalStyle } from "styled-components";
import BgImage from '../assets/bg-img-5.jpeg';

const GlobalStyles = createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        color: #333;
        background: url('${BgImage}')
    }
`;

export default GlobalStyles;