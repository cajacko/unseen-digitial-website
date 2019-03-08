import * as React from 'react';
import styled from 'styled-components';
import linkStyles, { Themes, ThemeStyleKeys } from '../config/linkStyles';
import Text from './Text';

interface IProps {
  url: string;
  text: string;
  theme: Themes;
}

/**
 * Get the theme style
 */
const getThemeStyle = (key: ThemeStyleKeys) => ({ theme }: { theme: Themes }) =>
  linkStyles[theme][key];

const height = 40;

const Container = styled.a<{ theme?: IProps['theme'] }>`
  height: ${height}px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${getThemeStyle('backgroundColor')};
  border-radius: ${height / 2}px;
  min-width: 100px;
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.23);

  &:hover {
    opacity: 0.75;
  }
`;

/**
 * Renders a simple link, like a button
 */
const Link = ({ url, text, theme }: IProps) => (
  <Container href={url} theme={theme}>
    <Text
      text={text}
      type="body1"
      color={getThemeStyle('textColor')({ theme })}
    />
  </Container>
);

export default Link;
