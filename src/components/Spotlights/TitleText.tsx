import * as React from 'react';
import Text from '../Text';

interface IProps {
  title: string;
  text: string;
}

/**
 * Render a title and text
 */
const TitleText = ({ title, text }: IProps) => (
  <section>
    <Text text={title} type="h3" />
    <Text text={text} type="body1" />
  </section>
);

export default TitleText;
