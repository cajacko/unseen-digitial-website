import * as React from 'react';
import Link from '../UI/Link';
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
  <TitleContent title={title} centerTitle centerContent>
    <Link text={linkText} url={linkUrl} theme="primary" />
  </TitleContent>
);

export default TitleLink;
