// @flow
import React from 'react';
import ContentLayout from '../../components/layouts/ContentLayout';
import Content from '../../components/Content';
import MasterLayout from '../../components/layouts/MasterLayout';

const data = {
  title: 'Some title',
  date: '14 Nov',
  post: 'We are gathered here brethren to witness the joining together of.',
  author: 'Some author',
  category: 'Some category',
  readTime: '3 mins',
};

export default () => (
  <MasterLayout>
    <ContentLayout>
      <Content {...data} />
    </ContentLayout>
  </MasterLayout>
);
