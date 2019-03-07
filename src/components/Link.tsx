import * as React from 'react';
import Text from './Text';

interface IProps {
  url: string;
  text: string;
}

/**
 * Renders a simple link, like a button
 */
const Link = ({ url, text }: IProps) => (
  <a href={url}>
    <Text text={text} type="body1" />
  </a>
);

export default Link;
