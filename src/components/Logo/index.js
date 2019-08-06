import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

import './index.sass';

// 도너츠 버튼을 누르면 전체메뉴 레이어 팝업이 생성됩니다.
class Logo extends Component {
  render() {
    let menu = <FontAwesomeIcon icon={faAlignJustify} />;
    return (
      <div>
        <div className="fl">{menu}</div>
        <div className="center fn">피그플랜 로고</div>
      </div>
    );
  }
}

export default Logo;
