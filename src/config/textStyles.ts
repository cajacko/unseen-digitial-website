/* eslint id-length: 0 */

export type Types = 'h1' | 'h2' | 'h3' | 'body1' | 'body2';

const defaultTypeStyles = {
  fontSize: 16,
  fontWeight: 300,
};

export type TypeStyle = typeof defaultTypeStyles;
export type TypeStyleKeys = keyof TypeStyle;

const textStyles: { [K in Types]: TypeStyle } = {
  body1: defaultTypeStyles,
  body2: {
    fontSize: 14,
    fontWeight: 300,
  },
  h1: {
    fontSize: 24,
    fontWeight: 600,
  },
  h2: {
    fontSize: 20,
    fontWeight: 600,
  },
  h3: {
    fontSize: 18,
    fontWeight: 600,
  },
};

export default textStyles;
