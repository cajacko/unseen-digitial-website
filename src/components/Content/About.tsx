import React from 'react';
import { WHITE } from '../../config/colors';
import content from '../../config/content.json';
import Rows from '../Layout/Rows';
import TextList from '../Spotlights/TextList';
import TitleText2 from '../Spotlights/TitleText2';

/**
 * Render the about component
 */
const About = () => (
  <Rows topPadding backgroundColor={WHITE} maxWidth>
    <TextList title={content.servicesTitle} items={content.services} />
    <TitleText2 title={content.uvpTitle} text1={content.uvpDescription1} text2={content.uvpDescription2} />
  </Rows>
);

export default About;
