import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button, Fade } from 'reactstrap';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

// import './index.scss';

@observer
class TopMenu extends Component {
  @observable
  fadeIn0 = true;

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
        <Nav className="bg-yellow nowrap">
          <NavItem className="overflow-hidden">
            <NavLink className="fl pa1" onClick={this.toggle0}>
              일보
            </NavLink>
            <NavLink className="fl pa1" onClick={this.toggle1}>
              IoT
            </NavLink>
            <NavLink className="fl pa1">성적그래프</NavLink>
            <NavLink className="fl pa1" onClick={this.toggle2}>
              양돈정보
            </NavLink>
            <NavLink className="fl pa1">퀵메뉴</NavLink>
          </NavItem>
        </Nav>

        <Nav className="overflow-hidden nowrap">
          <NavItem>
            {this.fadeIn0 && (
              <>
                <Fade in={this.fadeIn0} className="mb-3">
                  <Button outline color="primary" className="ma1 fl">
                    사육현황
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    교육현황
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    임신사고현황
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    생산현황
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    전입 및 전출/폐사현황
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    거래기록
                  </Button>
                </Fade>
              </>
            )}
          </NavItem>

          <NavItem>
            {this.fadeIn1 && (
              <>
                <Fade in={this.fadeIn1} className="mb-3">
                  <Button outline color="primary" className="ma1 fl">
                    모돈자동급이기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    군사급이기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    환경센서
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    음수관리기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    사료빈관리기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    돈선별기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    자돈급이기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    냉방기
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    전기화재
                  </Button>
                </Fade>
              </>
            )}
          </NavItem>

          <NavItem>
            {this.fadeIn2 && (
              <>
                <Fade in={this.fadeIn2} className="mb-3">
                  <Button outline color="primary" className="ma1 fl">
                    도매시세
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    양돈기사
                  </Button>
                  <Button outline color="primary" className="ma1 fl">
                    날씨
                  </Button>
                </Fade>
              </>
            )}
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TopMenu;
