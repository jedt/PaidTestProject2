'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  AppRegistry,
} = ReactNative;

var App = require('./app/users/App');

AppRegistry.registerComponent('PaidTestProject2', () => App);
