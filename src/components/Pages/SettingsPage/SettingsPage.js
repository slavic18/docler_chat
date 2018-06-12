import React from 'react';
import {connect} from 'react-redux';
// import actions
import {resetSettings, updateSetting} from "../../../actions/settings";

// import components
import Button from "../../Controls/Button/Button";
import Input from "../../Controls/Input/Input";
import Select from "../../Controls/Select/Select";

// import styles
import './SettingsPage.scss';

// declare settings choices
const interfaceColorsChoices = [
  {
    title: 'Light',
    value: 'light'
  },
  {
    title: 'Dark',
    value: 'dark'
  },
];

const clockDisplayFormatChoices = [
  {
    title: '12 Hours',
    value: '12'
  },
  {
    title: '24 Hours',
    value: '24'
  },
];

const sendMessageOnCtrlEnterChoices = [
  {
    title: 'On',
    value: 'on'
  },
  {
    title: 'Off',
    value: 'off'
  },
];


const languageChoices = [
  {
    title: 'Luxembourgish',
    value: 'lu'
  },
  {
    title: 'English',
    value: 'en'
  },
  {
    title: 'Russian',
    value: 'ru'
  },
];

class SettingsPage extends React.Component {
  handleResetSettingsClick = (e) => {
    const {resetSettings} = this.props;
    e.preventDefault();
    resetSettings();
  };
  handleInputChange = (e) => {
    const {
      settings,
      updateSettings
    } = this.props;
    const inputName = e.target.getAttribute('name');
    const value = e.target.value;

    if (typeof settings[inputName] !== 'undefined') {
      updateSettings(inputName, value)
    }
  };

  render() {
    const {
      settings: {
        currentUserName,
        interfaceColor,
        clockDisplayFormat,
        sendMessageOnCtrlEnter,
        language,
      }
    } = this.props;

    return (
      <div className="page page--settings">
        <form className="form form--settings">
          <Input
            onChange={this.handleInputChange}
            value={currentUserName}
            name="currentUserName"
            label="User name"
            type="text"
            placeholder="write your name"
          />
          <Input
            onChange={this.handleInputChange}
            name="interfaceColor"
            label="Interface color"
            type="radio"
            defaultValue={interfaceColor}
            choices={interfaceColorsChoices}
          />

          <Input
            onChange={this.handleInputChange}
            name="clockDisplayFormat"
            label="Clock display"
            type="radio"
            defaultValue={clockDisplayFormat}
            choices={clockDisplayFormatChoices}
          />

          <Input
            onChange={this.handleInputChange}
            name="sendMessageOnCtrlEnter"
            label="Send message on CTRL+ENTER"
            type="radio"
            defaultValue={sendMessageOnCtrlEnter}
            choices={sendMessageOnCtrlEnterChoices}
          />
          <Select
            label="Language"
            choices={languageChoices}
            name={"language"}
            defaultValue={language}
            onChange={this.handleInputChange}
          />
        </form>
        <div className="container--reset--button">
          <Button
            onClick={this.handleResetSettingsClick}
            title={"Reset to defaults"}
            className={"button__big button__fullwidth"}
          />
        </div>
      </div>
    )
  }
}

SettingsPage.defaultProps = {};
const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
};
const mapDispatchToProps = dispatch => ({
  updateSettings: (name, value) => dispatch(updateSetting(name, value)),
  resetSettings: (name, value) => dispatch(resetSettings())
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
