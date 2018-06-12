import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

// import styles
import 'normalize.css';
import './stylesheets/style.scss';
// import redux store
import store from './store';

// import router component
import Router from './router';

// import internalization provider
import ReduxConnectedIntlProvider from './intlProvider';


// enable hot reload module
if (module.hot) {
  module.hot.accept();
}
// render the main component
ReactDOM.render(
  <Provider store={store}>
    <ReduxConnectedIntlProvider>
      <Router/>
    </ReduxConnectedIntlProvider>
  </Provider>,
  document.getElementById('app'));



