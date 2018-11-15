// @flow
import React from 'react';

type Props = {
    title: string,
    category: string,
    post: string,
    author: string,
    date: string,
    // eslint-disable-next-line react/require-default-props
    readTime?: string,
};

// eslint-disable-next-line no-empty-pattern
export default ({
  category, title, post, author, date, readTime = '',
}:Props) => (
  <article className="content__item content__item--show">
    <span className="category category--full">{category}</span>
    <h2 className="title title--full">{title}</h2>
    <div className="meta meta--full">
      <img
        className="meta__avatar"
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        alt="author01"
        height="40"
      />
      <span className="meta__author">{author}</span>
      <span className="meta__date">
        <i className="fa fa-calendar-o" />
        {' '}
        {date}
      </span>
      <span className="meta__reading-time">
        <i className="fa fa-clock-o" />
        {' '}
        {readTime}
      </span>
    </div>
    { post }
  </article>
);
