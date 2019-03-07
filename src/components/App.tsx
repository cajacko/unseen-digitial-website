import React from 'react';
import content from '../config/content.json';
import Columns from './Layout/Columns';
import Rows from './Layout/Rows';
import Hero from './Spotlights/Hero';
import ImageTextLink from './Spotlights/ImageTextLink';
import TextList from './Spotlights/TextList';
import TitleLink from './Spotlights/TitleLink';
import TitleText from './Spotlights/TitleText';
import TextSpotlight from './TextSpotlight';

/**
 * Entry point for the page markup
 */
const App = () => (
  <React.Fragment>
    <Hero
      title={content.title}
      subTitle={content.tagLine}
      linkText={content.contactButton}
      linkUrl={content.contactUrl}
    />
    <TextSpotlight text={content.description} />
    <Columns>
      <TextList title={content.servicesTitle} items={content.services} />
      <TitleText title={content.uvpTitle} text={content.uvpDescription} />
    </Columns>
    <Rows>
      <TitleText title={content.peopleTitle} text={content.peopleDescription} />
      <ImageTextLink items={content.people} />
    </Rows>
    <Rows>
      <TitleLink
        title={content.contactTitle}
        linkText={content.contactButton}
        linkUrl={content.contactUrl}
      />
    </Rows>
  </React.Fragment>
);

export default App;
