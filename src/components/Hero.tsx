import * as React from 'react';
import Link from './Link';
import Text from './Text';

interface IProps {
  title: string;
  subTitle: string;
  linkText: string;
  linkUrl: string;
}

/**
 * Render a giant piece of hero content
 */
const Hero = ({
  title, subTitle, linkText, linkUrl,
}: IProps) => (
  <section>
    <Text type="h1" text={title} />
    <Text type="h2" text={subTitle} />
    <Link text={linkText} url={linkUrl} />
  </section>
);

export default Hero;
