import React, { Component } from 'react';
import './index.scss';
import Moment from 'react-moment';

export class BaseDate extends Component {
  render() {
    let format = 'YYYY년 MM월 DD일';
    let now = new Date();
    return (
      <div class="row">
        <div class="col-4 bt bl bb">기준일</div>
        <div class="col-8 ba">
          <Moment format={format}>{now}</Moment>
        </div>
      </div>
    );
  }
}

export default BaseDate;
