import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavItem, NavLink, Button } from 'reactstrap';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import './index.scss';

@observer
class TopMenu extends Component {
  @observable
  fadeIn0 = false;

  @observable
  fadeIn1 = false;

  @observable
  fadeIn2 = false;

  @observable
  fadeIn3 = false;

  @observable
  fadeIn4 = false;

  clear = () => {
    this.fadeIn0 = this.fadeIn1 = this.fadeIn2 = this.fadeIn3 = this.fadeIn4 = false;
  };

  @action
  toggle0 = () => {
    this.clear();
    this.fadeIn0 = true;
  };

  @action
  toggle1 = () => {
    this.clear();
    this.fadeIn1 = true;
  };

  @action
  toggle2 = () => {
    this.clear();
    this.fadeIn2 = true;
  };

  @action
  toggle3 = () => {
    this.clear();
    this.fadeIn3 = true;
  };

  @action
  toggle4 = () => {
    this.clear();
    this.fadeIn4 = true;
  };

  // -----------------------------------------------------------------------------
  // url 경로에 따라, 2Depth 메뉴 출력여부 확인
  // -----------------------------------------------------------------------------
  // react-router에서는 url이 바뀌지 않으므로, 이 방법은 쓸수 없다.
  // subMenuExist = () => {
  //   let loc = window.location.pathname;
  //   if (!loc) return false;

  //   let ret = !(loc.indexOf('/score') !== -1 || loc.indexOf('/quick') !== -1);
  //   console.log(
  //     'check : ',
  //     loc,
  //     loc.indexOf('/score'),
  //     loc.indexOf('/quick'),
  //     ret
  //   );
  //   return ret;
  // };

  render() {
    return (
      <div>
        <div className="scrolling-wrapper">
          <div>
            <NavLink href="#" onClick={this.toggle0}>
              일보
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={this.toggle1}>
              IoT
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={this.toggle2}>
              성적그래프
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={this.toggle3}>
              {' '}
              양돈정보
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={this.toggle4}>
              퀵메뉴
            </NavLink>
          </div>
        </div>

        {this.fadeIn0 && (
          <>
            <div className="scrolling-wrapper">
              <div>
                <Link to="/daily/1">
                  <Button outline color="primary" className="ml2 fl">
                    사육현황
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/daily/2">
                  <Button outline color="primary" className="ml2 fl">
                    교육현황
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/daily/3">
                  <Button outline color="primary" className="ml2 fl">
                    임신사고현황
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/daily/4">
                  <Button outline color="primary" className="ml2 fl">
                    생산현황
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/daily/5">
                  <Button outline color="primary" className="ml2 fl">
                    전입 및 전출/폐사현황
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/daily/6">
                  <Button outline color="primary" className="ml2 fl">
                    거래기록
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}

        {this.fadeIn1 && (
          <>
            <div className="scrolling-wrapper">
              <div className="item">
                <Link to="/iot/1">
                  <Button outline color="primary" className="ml2 fl">
                    모돈자동급이기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/2">
                  <Button outline color="primary" className="ml2 fl">
                    군사급이기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/3">
                  <Button outline color="primary" className="ml2 fl">
                    환경센서
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/4">
                  <Button outline color="primary" className="ml2 fl">
                    음수관리기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/5">
                  <Button outline color="primary" className="ml2 fl">
                    사료빈관리기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/6">
                  <Button outline color="primary" className="ml2 fl">
                    돈선별기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/7">
                  <Button outline color="primary" className="ml2 fl">
                    자돈급이기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/8">
                  <Button outline color="primary" className="ml2 fl">
                    냉방기
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/iot/9">
                  <Button outline color="primary" className="ml2 fl">
                    전기화재
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}

        {this.fadeIn3 && (
          <>
            <div className="scrolling-wrapper">
              <div className="item">
                <Link to="/pig/1">
                  <Button outline color="primary" className="ml2 fl">
                    도매시세
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/pig/2">
                  <Button outline color="primary" className="ml2 fl">
                    양돈기사
                  </Button>
                </Link>
              </div>
              <div className="item">
                <Link to="/pig/3">
                  <Button outline color="primary" className="ml2 fl">
                    날씨
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TopMenu;
