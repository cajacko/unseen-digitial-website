import * as React from 'react';
import Image from '../Image';
import Link from '../Link';
import Text from '../Text';

interface IProps {
  items: Array<{
    imageUrl: string;
    text: string;
    linkUrl: string;
    linkText: string;
    title: string;
    key: string;
    imageAlt: string;
  }>;
}

/**
 * Render a list of items where each has an image, text and link
 */
const ImageTextLink = ({ items }: IProps) => (
  <section>
    {items.map(({
 imageUrl, text, linkUrl, linkText, key, imageAlt, title,
}) => (
        <div key={key}>
          <Image src={imageUrl} alt={imageAlt} />
          <Text text={title} type="h3" />
          <Text text={text} type="body1" />
          <Link text={linkText} url={linkUrl} theme="primary" />
        </div>
      ))}
  </section>
);

export default ImageTextLink;
