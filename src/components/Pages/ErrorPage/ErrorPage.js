import React from 'react';

// import styles
import './ErrorPage.scss';


export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="page page--error">
        Sorry but this page doesn't exists
      </div>
    )
  }
}
