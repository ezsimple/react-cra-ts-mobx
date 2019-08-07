// ====================================================
// RootStore 입니다.
// 상호 접근해야 하는 Store는 이곳에 정의하시면 됩니다.
// ====================================================

import TopMenuStore from './TopMenuStore';

class RootStore {
  construct() {
    this.topMenuStore = new TopMenuStore(this);
  }
}

export default RootStore;
