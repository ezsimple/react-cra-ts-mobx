import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavItem, NavLink, Button } from 'reactstrap';

import { observer, inject } from 'mobx-react';

import './index.scss';

@inject('topMenuStore')
@observer
class TopMenu extends Component {
  render() {
    const { topMenuStore } = this.props;
    let toggle0 = topMenuStore.toggle0;
    let toggle1 = topMenuStore.toggle1;
    let toggle2 = topMenuStore.toggle2;
    let toggle3 = topMenuStore.toggle3;
    let toggle4 = topMenuStore.toggle4;

    let fadeIn0 = topMenuStore.fadeIn0;
    let fadeIn1 = topMenuStore.fadeIn1;
    let fadeIn2 = topMenuStore.fadeIn2;
    let fadeIn3 = topMenuStore.fadeIn3;
    let fadeIn4 = topMenuStore.fadeIn4;

    return (
      <div>
        <div className="scrolling-wrapper">
          <div>
            <NavLink href="#" onClick={toggle0}>
              일보
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={toggle1}>
              IoT
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={toggle2}>
              성적그래프
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={toggle3}>
              {' '}
              양돈정보
            </NavLink>
          </div>
          <div>
            <NavLink href="#" onClick={toggle4}>
              퀵메뉴
            </NavLink>
          </div>
        </div>

        {fadeIn0 && (
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

        {fadeIn1 && (
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

        {fadeIn3 && (
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
