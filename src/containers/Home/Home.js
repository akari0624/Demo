import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Content from './components/Content';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
      </div>
    );
  }
}
