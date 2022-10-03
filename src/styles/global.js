import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: 'Inter', sans-serif;
        transition: 0.2s;
    }

    img {
        max-width: 100%;
    }

    button {
        cursor: pointer;
    }

    ol, ul, li {
        list-style: none;
    }

    :root {
        --primary: #ea1d2c;
        --primary-50: #ea1d2c80;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        --white: #FFFFFF;
    }

    /* TYPOGRAPHY */

    .title {
        font-weight: 700;
    }

    .title.one {
        font-size: 26px;
        line-height: 34px;
    }

    .title.two {
        font-size: 22px;
        line-height: 24px;
    }

    .title.three {
        font-size: 18px;
        line-height: 24px;
    }

    .title.four {
        font-size: 14px;
        line-height: 24px;
    }

    .text {
        font-weight: 400;
    }

    .text.one {
        font-size: 16px;
        line-height: 24px;
    }

    .text.two {
        font-size: 14px;
        line-height: 24px;
    }

    .text.two.bold {
        font-weight: 600;
    }

    .text.three {
        font-size: 12px;
        line-height: 16px;
    }

`