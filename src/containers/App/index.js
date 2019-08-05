/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import Counter from 'components/NewCounter';

import GlobalStyle from '../../global-styles';
import HomePage from 'containers/HomePage';
import IotPage from 'containers/IotPage';
import NotFoundPage from 'containers/NotFoundPage';

const AppWrapper = styled.div`
  /*
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  */
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        {/*
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate">
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        */}
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/iot" component={IotPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
