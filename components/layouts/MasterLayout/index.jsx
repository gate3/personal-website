// @flow
/* eslint-disable react/button-has-type */
import * as React from 'react';
import Sidebar from '../Sidebar';
// import '../../../assets/css/style1.css';

type Props = {
    children: React.Node,
};

export default ({ children }:Props) => (
  <div className="container">
    <button id="menu-toggle" className="menu-toggle">
      <span>Menu</span>
    </button>
    <Sidebar />
    <div id="theGrid" className="main">
      {children}
    </div>
  </div>
);
