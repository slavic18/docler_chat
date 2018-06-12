import React from 'react';
import Enzyme from 'enzyme';
import {shallowWithIntl, mountWithIntl, loadTranslation} from 'enzyme-react-intl';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import {App} from './App';
import Header from './../Header/Header';
import ContainerRouterRedux from "../../../test/components/ContainerRouterRedux";

loadTranslation("../../../../test/locales/en.json");

Enzyme.configure({adapter: new Adapter()});
// unit tests for App component
describe('App  component', () => {
  describe('render', () => {
    it('should render without errors', () => {
      const wrapper = Enzyme.shallow(<ContainerRouterRedux><App/></ContainerRouterRedux>).dive();
      assert.strictEqual(wrapper.closest('.app--container').length, 1);
      assert.strictEqual(wrapper.closest('.page--content').length, 1);
    });
    it('should render children', () => {
      const children = <div className="test-children"/>;
      const wrapper = Enzyme.shallow(<ContainerRouterRedux><App>{children}</App></ContainerRouterRedux>).dive();
      assert.strictEqual(wrapper.closest(children).length, 1);
    });
    it('should render Header Component', () => {
      const wrapper = Enzyme.shallow(<ContainerRouterRedux><App/></ContainerRouterRedux>).dive();
      assert.strictEqual(wrapper.closest(Header).length, 1);
    });
  });
});
