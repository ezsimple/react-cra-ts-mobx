import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignJustify,
  faHome,
  faQrcode,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
  render() {
    let menu = <FontAwesomeIcon icon={faAlignJustify} />;
    let home = <FontAwesomeIcon icon={faHome} />;
    let qr = <FontAwesomeIcon icon={faQrcode} />;
    let myPage = <FontAwesomeIcon icon={faUser} />;

    return (
      <div>
        {menu} {home} {qr} {myPage}
      </div>
    );
  }
}
