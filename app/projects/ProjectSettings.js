'use strict';

var React = require('react');
var ReactNative = require('react-native');
var ActionCreator = require('../actions/ActionCreator');
var AppStore = require('../stores/AppStore');
var MainStyleSheet = require('../stylesheets/Main');
var deviceHeight = require('Dimensions').get('window').height;
var deviceWidth = require('Dimensions').get('window').width;
var DashboardRoutes = require('../users/DashboardRoutes');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Navigator
} = ReactNative;

var styles = StyleSheet.create({
  ...MainStyleSheet,
  content : {
    height: deviceHeight,
    backgroundColor: '#FFFFFF'
  },

  container: {
    marginLeft: 10,
    marginRight: 10,
  },

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 1,
    color: '#000000'
  }
});

var ProjectSettings = React.createClass({
  render: function() {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <Text>ProjectSettings</Text>
        </View>
      </View>
    );
  },
});

module.exports = ProjectSettings;