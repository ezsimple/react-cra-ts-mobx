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
import { faAlignJustify, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

class Logo extends Component {
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
    let logo = <FontAwesomeIcon icon={faPiggyBank} />;
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/" className="mr-auto">
            {logo} Pigplan XE
          </NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/components/" className="nav-link">
                  Components
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">
                  Pigplan XE
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Logo;
