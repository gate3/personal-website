// @flow
import * as React from 'react';
import Article from '../Article';

type Props = {
    children: React.Element<typeof Article>
}

export default ({ children }:Props) => (
  <section className="grid">
    <header className="top-bar">
      <h2 className="top-bar__headline">Latest articles</h2>
      <div className="filter">
        <span>Filter by:</span>
        <span className="dropdown">Popular</span>
      </div>
    </header>
    {children}
  </section>
);
