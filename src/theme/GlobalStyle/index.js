import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 * {
        box-sizing: border-box;
    }
    ${normalize}
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamily};
        display: flex;
        min-height: 100vh;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.background.main.color};
        transition: all 0.25s linear;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
