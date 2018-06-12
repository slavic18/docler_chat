import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import Button from './Button';
import {shallowWithIntl, mountWithIntl, loadTranslation} from 'enzyme-react-intl';

loadTranslation("../../../../test/locales/en.json");

Enzyme.configure({adapter: new Adapter()});
// unit tests for Button component
describe('Button  component', () => {
  describe('render', () => {
    it('should render without errors', () => {
      const wrapper = shallowWithIntl(<Button title="test"/>).dive();
      assert.strictEqual(wrapper.find('.button').length, 1);
    });
    it('should render correct text', () => {
      const title = 'test';
      const wrapper = shallowWithIntl(<Button title={title}/>).dive();
      assert.strictEqual(wrapper.find('.button').text(), title);
    });
    it('should render with disabled attribute', () => {
      const wrapper = shallowWithIntl(<Button disabled/>).dive();
      assert.ok(wrapper.find('.button').is('[disabled]'));
    });
    it('should render  with correct type', () => {
      const wrapper = shallowWithIntl(<Button type="submit"/>).dive();
      assert.strictEqual(wrapper.find('.button[type="submit"]').length, 1);
    });
    it('should handle click event ', () => {
      let clickedCount = 0;
      const onClick = () => {
        clickedCount++;
      };
      const wrapper = shallowWithIntl(<Button type="button" onClick={onClick}/>).dive();
      wrapper.find('.button').simulate('click');
      assert.strictEqual(clickedCount, 1);
    });
  });
});
