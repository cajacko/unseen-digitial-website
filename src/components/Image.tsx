import * as React from 'react';

interface IProps {
  src: string;
  alt: string;
}

/**
 * Render an image
 */
const Image = ({ src, alt }: IProps) => <img src={src} alt={alt} />;

export default Image;
