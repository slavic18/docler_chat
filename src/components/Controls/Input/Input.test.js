import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import Input from './Input';
import {shallowWithIntl, mountWithIntl, loadTranslation} from 'enzyme-react-intl';

loadTranslation("../../../../test/locales/en.json");

Enzyme.configure({adapter: new Adapter()});

describe('Input component', () => {
  describe('render', () => {
    it('should render without crashing', () => {
      const wrapper = shallowWithIntl(<Input name="my-name"/>).dive();
      assert.strictEqual(wrapper.filter('.form--row').length, 1);
    });

    //
    it('should render the with a correct label text', () => {
      const labelText = 'test';
      const wrapper = shallowWithIntl(<Input name="my-name" label={labelText}/>).dive();
      assert.strictEqual(wrapper.find('.form--row__title').text(), labelText);
    });


    it('should render with an input', () => {
      const wrapper = shallowWithIntl(<Input name="my-name"/>).dive();
      assert.strictEqual(wrapper.find('input').length, 1);
    });

  });
});
