/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default () => (
  <Link href="/post" prefetch>
    <a className="grid__item">
      <h2 className="title title--preview">On Humans &amp; other Beings</h2>
      <div className="loader" />
      <span className="category">Stories for humans</span>
      <div className="meta meta--preview">
        <img
          className="meta__avatar"
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="author01"
          height="100"
        />
        <span className="meta__date">
          <i className="fa fa-calendar-o" />
          {' '}
          9 Apr
        </span>
        <span className="meta__reading-time">
          <i className="fa fa-clock-o" />
          {' '}
          3 min read
        </span>
      </div>
    </a>
  </Link>
);
