import { Colors, PRIMARY, WHITE } from './colors';

export type Themes = 'light' | 'primary';

const defaultThemeStyle: {
textColor: Colors;
backgroundColor: Colors;
} = {
  backgroundColor: PRIMARY,
  textColor: WHITE,
};

export type ThemeStyle = typeof defaultThemeStyle;
export type ThemeStyleKeys = keyof ThemeStyle;

const linkStyles: { [K in Themes]: ThemeStyle } = {
  light: {
    backgroundColor: WHITE,
    textColor: PRIMARY,
  },
  primary: defaultThemeStyle,
};

export default linkStyles;
