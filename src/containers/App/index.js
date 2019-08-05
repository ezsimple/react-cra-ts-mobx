/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// npmtrends : https://www.npmtrends.com/antd-vs-element-react-vs-material-ui
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import GlobalStyle from '../../global-styles';

import Header from 'components/Header';
import Footer from 'components/Footer';

import HomePage from 'containers/HomePage';
import IotPage from 'containers/IotPage';
import NotFoundPage from 'containers/NotFoundPage';

const AppWrapper = styled.div`
  /*
  어떤 디자인을 입혀야 하는지????

  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  */
`;

@observer
class App extends Component {
  @observable
  state = {};

  render() {
    return (
      <AppWrapper>
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
