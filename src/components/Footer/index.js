import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignJustify,
  faHome,
  faQrcode,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    let iconSize = '2x';
    let iconColor = '#6c757d';
    let home = (
      <FontAwesomeIcon icon={faHome} size={iconSize} color={iconColor} />
    );
    let qr = (
      <FontAwesomeIcon icon={faQrcode} size={iconSize} color={iconColor} />
    );
    let myPage = (
      <FontAwesomeIcon icon={faUser} size={iconSize} color={iconColor} />
    );

    return (
      <div className="always_bottom">
        <Navbar color="faded" light>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Pigplan XE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <div className="col">
            <Link to="/">{home}</Link>
          </div>
          <div className="col">
            <Link to="/qr">{qr}</Link>
          </div>
          <div className="col">
            <Link to="/my">{myPage}</Link>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
