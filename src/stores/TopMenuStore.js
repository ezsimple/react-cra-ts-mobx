import { observable, action } from 'mobx';

class TopMenuStore {
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
}

export default TopMenuStore;
