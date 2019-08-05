import React, { Component } from 'react';

class SecondTopMenu extends Component {
  render() {
    return this.iotMenu();
  }

  // 일보 서브 메뉴
  dailyReportMenu() {
    return (
      <div>
        [사육현황][교배현황][임신사고현황][생산현황][전입 및
        전출/폐사현황][거래기록]
      </div>
    );
  }

  // IoT 서브 메뉴
  iotMenu() {
    return (
      <div>
        [자동 급이기][군사 급이기][환경센서][음수관리기][사료빈관리기]
        [돈선별기][자돈급이기][냉방기][전기화재]
      </div>
    );
  }

  // 성적그래프 서브 메뉴 (메뉴 없음)
  scoreGraphMenu() {
    return <div />;
  }

  // 양돈정보 서브 메뉴
  pigInfoMenu() {
    return <div>[도매시세] [양돈기사] [날씨]</div>;
  }

  // 퀵메뉴 // 별도의 레이어 팝업이 필요
  quickMenu() {
    return <div />;
  }
}

export default SecondTopMenu;
