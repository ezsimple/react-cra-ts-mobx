import React, { Component } from 'react';
import Logo from 'components/Logo';
import TopMenu from 'components/TopMenu';

class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <TopMenu />
      </div>
    );
  }
}

export default Header;
