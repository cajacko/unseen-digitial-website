import * as React from 'react';
import Text from './Text';

interface IProps {
  text: string;
}

/**
 * Render some text in a sexy way
 */
const TextSpotlight = ({ text }: IProps) => <Text text={text} type="body1" />;

export default TextSpotlight;
