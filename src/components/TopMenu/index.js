import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavItem, NavLink, Button } from 'reactstrap';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import './index.scss';

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
            <NavLink href="/score">성적그래프</NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={this.toggle2}>
              양돈정보
            </NavLink>
          </div>
          <div>
            <NavLink href="/quick">퀵메뉴</NavLink>
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

        {this.fadeIn2 && (
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
