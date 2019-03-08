import * as React from 'react';
import Link from '../Link';
import TitleContent from './TitleContent';

interface IProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

/**
 * Render a title and link
 */
const TitleLink = ({ title, linkText, linkUrl }: IProps) => (
  <TitleContent title={title} center>
    <Link text={linkText} url={linkUrl} theme="primary" />
  </TitleContent>
);

export default TitleLink;
