import React from "react";
import 'raf/polyfill';
import 'babel-polyfill';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import components
import App from './components/App/App';
import ChatPage from "./components/Pages/ChatPage/ChatPage";
import SettingsPage from "./components/Pages/SettingsPage/SettingsPage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

export default () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" render={() => <Redirect from="/" to="chat"/>}/>
        <Route exact path="/chat" component={ChatPage}/>
        <Route exact path="/settings" component={SettingsPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </App>
  </BrowserRouter>
);
