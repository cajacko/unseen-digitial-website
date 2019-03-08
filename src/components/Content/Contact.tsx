import React from 'react';
import { WHITE } from '../../config/colors';
import content from '../../config/content.json';
import Rows from '../Layout/Rows';
import TitleLink from '../Spotlights/TitleLink';

/**
 * Render the contact component
 */
const Contact = () => (
  <Rows backgroundColor={WHITE} maxWidth>
    <TitleLink
      title={content.contactTitle}
      linkText={content.contactButton}
      linkUrl={content.contactUrl}
    />
  </Rows>
);

export default Contact;
