'use strict';
var React = require('react');
var ReactNative = require('react-native');
var ActionCreator = require('./ActionCreator');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var Actions = {
  popDashboardNav: function() {
    AppDispatcher.dispatch({
      actionType: AppConstants.POP_DASHBOARD_NAV,
    });
  },
}

module.exports = Actions;