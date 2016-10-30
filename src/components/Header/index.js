import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Header extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render () {
    return (
      <AppBar
        title="やっほ〜〜"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
