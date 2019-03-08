import React from 'react';
import { WHITE } from '../../config/colors';
import content from '../../config/content.json';
import Columns from '../Layout/Columns';
import TextList from '../Spotlights/TextList';
import TitleText from '../Spotlights/TitleText';

/**
 * Render the about component
 */
const About = () => (
  <Columns topPadding backgroundColor={WHITE} maxWidth>
    <TextList title={content.servicesTitle} items={content.services} />
    <TitleText title={content.uvpTitle} text={content.uvpDescription} />
  </Columns>
);

export default About;
