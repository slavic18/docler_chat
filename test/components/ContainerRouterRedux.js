import React from "react";
import 'raf/polyfill';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// import redux store
import store from './../../src/store';

// import internalization provider
import ReduxConnectedIntlProvider from './../../src/intlProvider';

export default class ContainerRouterRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxConnectedIntlProvider>
          <BrowserRouter>
            {this.props.children}
          </BrowserRouter>
        </ReduxConnectedIntlProvider>
      </Provider>
    )
  }
}
