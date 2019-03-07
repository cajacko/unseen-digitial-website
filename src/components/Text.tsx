import * as React from 'react';

interface IProps {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
}

/**
 * Renders a simple piece of text, use as a component so we can have
 * all the text styles in 1 place
 */
const Text = ({ text }: IProps) => <span>{text}</span>;

export default Text;
