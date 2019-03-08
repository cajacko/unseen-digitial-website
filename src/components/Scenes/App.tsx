import React from 'react';
import { createGlobalStyle } from 'styled-components';
import About from '../Content/About';
import Contact from '../Content/Contact';
import Description from '../Content/Description';
import People from '../Content/People';
import TitleBanner from '../Content/TitleBanner';

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
    <TitleBanner />
    <Description />
    <About />
    <People />
    <Contact />
  </React.Fragment>
);

export default App;
