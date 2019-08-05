import React, { Component } from 'react';
import Logo from 'components/Logo';
import FirstTopMenu from 'components/FirstTopMenu';
import SecondTopMenu from 'components/SecondTopMenu';
// import BaseDate from 'components/BaseDate';

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <FirstTopMenu />
        <SecondTopMenu />
      </div>
    );
  }
}

export default Header;
