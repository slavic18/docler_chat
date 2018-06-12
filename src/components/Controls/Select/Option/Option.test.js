import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import Option from './Option';
import ContainerRouterRedux from "../../../../../test/components/ContainerRouterRedux";

Enzyme.configure({ adapter: new Adapter() });
// unit tests for Select Option component
describe('Select Option  component', () => {
  describe('render', () => {
    const props = {
      title: 'Test option title',
    };
    const wrapper = Enzyme.render(<ContainerRouterRedux><Option {...props} /></ContainerRouterRedux>);

    it('should render Option component', () => {
      assert.equal(wrapper.filter('option').length, 1);
    });
    it('should render correct option title', () => {
      assert.equal(wrapper.text(), props.title);
    });
  });
});
