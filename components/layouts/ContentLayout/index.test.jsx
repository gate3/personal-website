import React from 'react';
import { shallow } from 'enzyme';
import ContentLayout from '.';
import Content from '../../Content';

describe('<ContentLayout />', () => {
  describe('Renders', () => {
    it('without content and does not crash', () => {
      const wrapper = shallow(<ContentLayout />);
      expect(wrapper.length).toBe(1);
    });
    it('with content and does not crash', () => {
      const wrapper = shallow(<ContentLayout><Content /></ContentLayout>);
      expect(wrapper.length).toBe(1);
    });
  });
});
