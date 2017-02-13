'use strict';

var React = require('react');
var ReactNative = require('react-native');
var MainStyleSheet = require('../stylesheets/Main');
var Login = require('../users/Login');
var Dashboard = require('../users/Dashboard');
var deviceHeight = require('Dimensions').get('window').height;
var deviceWidth = require('Dimensions').get('window').width;
var AppStore = require('../stores/AppStore');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback
} = ReactNative;

var styles = StyleSheet.create({
  ...MainStyleSheet,
});

var App = React.createClass({
  getInitialState: function() {
    return ({
      currentView: 'Login'
    });
  },

  _handleOnChangeView: function() {
    var currentView = AppStore.getView();
    this.setState({currentView});
  },

  componentWillMount: function() {
    AppStore.addChangeViewListener(this._handleOnChangeView);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeViewListener(this._handleOnChangeView);
  },

  render: function() {
    return (
      <View>
        {this.state.currentView == 'Login' ? <Login /> : <Dashboard />}
      </View>
    );
  },
});

module.exports = App;