import { typographyVariants } from './typographyVariants';

export const lightTheme = {
  colors: {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#FFFFFF',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    logo: {
      fill: '#070C0E',
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#FFFFFF',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#FFFFFF',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#FFFFFF',
      },
      light: {
        color: '#88989E',
        contrastText: '#FFFFFF',
      },
    },
    quaternary: {
      title: {
        color: '#070C0E',
      },
      subTitle: {
        color: '#88989E',
      },
    },
  },
  typographyVariants,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
  imageBubbles: 'url(/images/bubblesLight.svg)',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  colors: {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#070C0E',
      },
    },
    logo: {
      fill: '#FFFFFF',
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#FFFFFF',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#FFFFFF',
      },
    },
    tertiary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#FFFFFF',
      },
      light: {
        color: '#FFFFFF',
        contrastText: '#FFFFFF',
      },
    },
    quaternary: {
      title: {
        color: '#FFFFFF',
      },
      subTitle: {
        color: '#D4D4D4',
      },
    },
  },
  typographyVariants,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
  imageBubbles: 'url(/images/bubblesDark.svg)',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export default {
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
