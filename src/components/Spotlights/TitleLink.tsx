import * as React from 'react';
import Link from '../Link';
import Text from '../Text';

interface IProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

/**
 * Render a title and link
 */
const TitleLink = ({ title, linkText, linkUrl }: IProps) => (
  <section>
    <Text text={title} type="h3" />
    <Link text={linkText} url={linkUrl} />
  </section>
);

export default TitleLink;
