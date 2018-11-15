import React from 'react';
import MasterLayout from '../components/layouts/MasterLayout';
import { ArticleList, Article } from '../components/ArticleContent';

const Index = () => (
  <MasterLayout>
    <ArticleList>
      <Article />
    </ArticleList>
  </MasterLayout>
);

export default Index;
