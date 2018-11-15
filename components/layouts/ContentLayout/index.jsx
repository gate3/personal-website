// @flow
import * as React from 'react';
import Content from '../../Content';

type Props = {
    children: React.Element<typeof Content>
}

export default ({ children }:Props) => (
  <section className="content content--show">
    <div className="scroll-wrap">
      {children}
    </div>
  </section>
);
