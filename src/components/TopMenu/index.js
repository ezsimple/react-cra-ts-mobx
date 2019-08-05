import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class TopMenu extends Component {
  @observable
  fadeIn0 = false;

  @observable
  fadeIn1 = false;

  @observable
  fadeIn2 = false;

  @action
  toggle0 = () => {
    this.fadeIn0 = true;
    this.fadeIn1 = false;
    this.fadeIn2 = false;
  };

  @action
  toggle1 = () => {
    this.fadeIn0 = false;
    this.fadeIn1 = true;
    this.fadeIn2 = false;
  };

  @action
  toggle2 = () => {
    this.fadeIn0 = false;
    this.fadeIn1 = false;
    this.fadeIn2 = true;
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle0}>
          일보
        </Button>
        <Fade in={this.fadeIn0} className="mb-3">
          <Button>사육현황</Button>
          <Button>교육현황</Button>
          <Button>임신사고현황</Button>
          <Button>생산현황</Button>
          <Button>전입 및 전출/폐사현황</Button>
          <Button>거래기록</Button>
        </Fade>

        <Button color="primary" onClick={this.toggle1}>
          IoT
        </Button>
        <Fade in={this.fadeIn1} className="mb-3">
          <Button>모돈자동급이기</Button>
          <Button>군사급이기</Button>
          <Button>환경센서</Button>
          <Button>음수관리기</Button>
          <Button>사료빈관리기</Button>
          <Button>돈선별기</Button>
          <Button>자돈급이기</Button>
          <Button>냉방기</Button>
          <Button>전기화재</Button>
        </Fade>

        <Button color="primary">성적그래프</Button>

        <Button color="primary" onClick={this.toggle2}>
          양돈정보
        </Button>
        <Fade in={this.fadeIn2} className="mb-3">
          <Button>도매시세</Button>
          <Button>양돈기사</Button>
          <Button>날씨</Button>
        </Fade>

        <Button color="primary">퀵메뉴</Button>
      </div>
    );
  }
}

export default TopMenu;
