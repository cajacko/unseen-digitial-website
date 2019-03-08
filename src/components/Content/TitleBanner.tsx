import React from 'react';
import { BLACK } from '../../config/colors';
import content from '../../config/content.json';
import { OVERLAP } from '../Layout/ContentContainer';
import Rows from '../Layout/Rows';
import Hero from '../Spotlights/Hero';

/**
 * The title banner
 */
const TitleBanner = () => (
  <Rows bottomPadding backgroundColor={BLACK}>
    {({ backgroundColor }) => (
      <Hero
        title={content.title}
        subTitle={content.tagLine}
        linkText={content.contactButton}
        linkUrl={content.contactUrl}
        backgroundColor={backgroundColor}
        height={`calc(100vh - ${OVERLAP * 2}px)`}
      />
    )}
  </Rows>
);

export default TitleBanner;
