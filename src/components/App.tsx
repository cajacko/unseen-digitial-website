import React from 'react';
import content from '../config/content.json';
import Hero from './Hero';

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
  </React.Fragment>
);

export default App;
