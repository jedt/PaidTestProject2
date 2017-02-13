'use strict';

var keyMirror = require('keymirror');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var _view;

const Events = keyMirror({
  CHANGE_VIEW: null,
});

var _onLoginPressed = function() {
  _view = 'Dashboard';
  AppStore.emitChangeView();
};

var AppStore = assign({}, EventEmitter.prototype, {
  initialize: function() {
    _view = null;
  },

  getView: function() {
    return _view;
  },

  emitChangeView: function() {
    this.emit(Events.CHANGE_VIEW);
  },
  addChangeViewListener: function(callback) {
    this.on(Events.CHANGE_VIEW, callback);
  },
  removeChangeViewListener: function(callback) {
    this.removeListener(Events.CHANGE_VIEW, callback);
  }
});

AppStore.initialize();

AppDispatcher.register(function(action) {
  switch(action.actionType) {
      case AppConstants.BEFORE_UNMOUNT_APP:
          AppStore.initialize();
        break;
      case AppConstants.POP_DASHBOARD_NAV:
          setTimeout(()=>{
            _view = AppConstants.POP_DASHBOARD_NAV;
            AppStore.emitChangeView();
          }, 1);
        break;
      case AppConstants.ACTION_CREATOR:
        var {
          payload,
          type
        } = action.params;

        switch (type) {
          case 'OnLoginPressed':
              setTimeout(()=>{
                _onLoginPressed();
              }, 1);
            break;
          case 'DashboardNavToProjectTasks':
              setTimeout(()=>{
                _view = 'ProjectTasks';
                AppStore.emitChangeView();
              }, 1);
            break;
          case 'DashboardNavToProjectSettings':
              setTimeout(()=>{
                _view = 'ProjectSettings';
                AppStore.emitChangeView();
              }, 1);
            break;
          default:
            break;
        }

      break;
    default:
      break;
  }
});

module.exports = AppStore;