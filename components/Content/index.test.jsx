import React from 'react';
import { shallow } from 'enzyme';
import Content from '.';

describe('<Content />', () => {
  describe('Renders', () => {
    it('without content and does not crash', () => {
      const wrapper = shallow(<Content />);
      expect(wrapper.length).toBe(1);
    });
    it('with content and does not crash', () => {
      const data = {
        post: 'Meeee',
        title: 'Title',
        category: 'Category',
      };
      const wrapper = shallow(<Content {...data} />);
      const category = wrapper.find('span.category.category--full');
      expect(category.text()).toEqual(data.category);
      const title = wrapper.find('h2.title.title--full');
      expect(title.text()).toEqual(data.title);
    });
  });
});
