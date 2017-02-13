/**
EmptyStore - a blank store template for creating a new store
*/
'use strict';

var keyMirror = require('keymirror');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var Actions = require('../actions/Actions');

const Events = keyMirror({
  CHANGE: null,
});

var EmptyStore = assign({}, EventEmitter.prototype, {
  initialize: function() {

  },

  emitChange: function() {
    this.emit(Events.CHANGE);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(Events.CHANGE, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(Events.CHANGE, callback);
  }
});

EmptyStore.initialize();

AppDispatcher.register(function(action) {
  switch(action.actionType) {
      case AppConstants.BEFORE_UNMOUNT_APP:
          EmptyStore.initialize();
        break;
      case AppConstants.ACTION_CREATOR:
        var {
          payload,
          type
        } = action.params;

        switch (type) {
          default:
            break;
        }

      break;
    default:
      break;
  }
});

module.exports = EmptyStore;