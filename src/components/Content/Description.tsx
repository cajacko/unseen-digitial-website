import React from 'react';
import { GREY_LIGHT } from '../../config/colors';
import content from '../../config/content.json';
import Rows from '../Layout/Rows';
import TextSpotlight from '../Spotlights/Text';

/**
 * Render the description component
 */
const Description = () => (
  <Rows
    verticalOverlap
    backgroundColor={GREY_LIGHT}
    centerHorizontally
    maxWidth={500}
  >
    <TextSpotlight text={content.description} />
  </Rows>
);

export default Description;
