import React, { Component } from 'react';
import './index.sass';

// 도너츠 버튼을 누르면 전체메뉴 레이어 팝업이 생성됩니다.
class Logo extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-default" type="button">
          <span
            className="glyphicon glyphicon-menu-hamburger"
            aria-hidden="true"
          />
        </button>
        피그플랜 로고
      </div>
    );
  }
}

export default Logo;
