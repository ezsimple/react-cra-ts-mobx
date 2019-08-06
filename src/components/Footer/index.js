import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignJustify,
  faHome,
  faQrcode,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export default class Footer extends Component {
  render() {
    let iconSize = '2x';

    let menu = <FontAwesomeIcon icon={faAlignJustify} size={iconSize} />;
    let home = <FontAwesomeIcon icon={faHome} size={iconSize} />;
    let qr = <FontAwesomeIcon icon={faQrcode} size={iconSize} />;
    let myPage = <FontAwesomeIcon icon={faUser} size={iconSize} />;

    return (
      <>
        <div class="row always_bottom">
          <div class="col">{menu}</div>
          <div class="col">{home}</div>
          <div class="col">{qr}</div>
          <div class="col">{myPage}</div>
        </div>
      </>
    );
  }
}
