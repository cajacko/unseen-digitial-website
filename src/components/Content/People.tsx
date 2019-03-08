import React from 'react';
import { GREY_LIGHT } from '../../config/colors';
import content from '../../config/content.json';
import Rows from '../Layout/Rows';
import ImageTextLink from '../Spotlights/ImageTextLink';
import TitleText from '../Spotlights/TitleText';

/**
 * Render the people component
 */
const People = () => (
  <Rows backgroundColor={GREY_LIGHT} maxWidth>
    <TitleText
      title={content.peopleTitle}
      text={content.peopleDescription}
      centerText
      centerTitle
      maxContentWidth={600}
    />
    <ImageTextLink items={content.people} />
  </Rows>
);

export default People;
