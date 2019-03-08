import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BLACK, GREY_LIGHT, WHITE } from '../config/colors';
import content from '../config/content.json';
import Columns from './Layout/Columns';
import { OVERLAP } from './Layout/ContentContainer';
import Rows from './Layout/Rows';
import Hero from './Spotlights/Hero';
import ImageTextLink from './Spotlights/ImageTextLink';
import TextSpotlight from './Spotlights/Text';
import TextList from './Spotlights/TextList';
import TitleLink from './Spotlights/TitleLink';
import TitleText from './Spotlights/TitleText';

// Just add global resets here, do not target any components, as
// their style should be scoped
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

/**
 * Entry point for the page markup
 */
const App = () => (
  <React.Fragment>
    <GlobalStyle />
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
    <Rows
      verticalOverlap
      backgroundColor={GREY_LIGHT}
      centerHorizontally
      maxWidth={500}
    >
      <TextSpotlight text={content.description} />
    </Rows>
    <Columns topPadding backgroundColor={WHITE} maxWidth>
      <TextList title={content.servicesTitle} items={content.services} />
      <TitleText title={content.uvpTitle} text={content.uvpDescription} />
    </Columns>
    <Rows backgroundColor={GREY_LIGHT} maxWidth>
      <TitleText
        title={content.peopleTitle}
        text={content.peopleDescription}
        centerText
        centerTitle
      />
      <ImageTextLink items={content.people} />
    </Rows>
    <Rows backgroundColor={WHITE} maxWidth>
      <TitleLink
        title={content.contactTitle}
        linkText={content.contactButton}
        linkUrl={content.contactUrl}
      />
    </Rows>
  </React.Fragment>
);

export default App;
