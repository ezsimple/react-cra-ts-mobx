import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

import './index.sass';

// 도너츠 버튼을 누르면 전체메뉴 레이어 팝업이 생성됩니다.
class Logo extends Component {
  render() {
    let menu = <FontAwesomeIcon icon={faAlignJustify} />;
    let logo = <FontAwesomeIcon icon={faPiggyBank} />;
    return (
      <>
        <div class="row">
          <div class="col">{menu}</div>
          <div class="col">{logo} Pigplan XE</div>
          <div class="col" />
        </div>
      </>
    );
  }
}

export default Logo;
