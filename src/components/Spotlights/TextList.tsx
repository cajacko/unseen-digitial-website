import * as React from 'react';
import Text from '../Text';

interface IProps {
  title: string;
  items: string[];
}

/**
 * Render a list of text with a title
 */
const TextList = ({ title, items }: IProps) => (
  <section>
    <Text text={title} type="h3" />
    <ul>
      {items.map(text => (
        <li key={text}>
          <Text text={text} type="body1" />
        </li>
      ))}
    </ul>
  </section>
);

export default TextList;
