'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionCreator = {
  /**
  * sendWithDispatch() sends an action to flux for dispatch
  *
  *
  * @param {mixed}
  *   params - if a string, it takes the value and sends to flux
  *   params - if an object, it must have the following properties
  *       1. type {string} - if a string, it will take the value
  *                           and sends it to flux. if null it will use
  *                           send() for dispatch.
  *       2. payload {object}
  *       3. send {function} - function callback when params.type is set to null
  *       4. beforeSend {function}
  * @payload {object} - the payload
  * @return {void}
  */
  sendWithDispatch: function(params, payload={}) {
    var type;
    if (typeof params === 'string') {
      type = params;
      AppDispatcher.dispatch({
        actionType: AppConstants.ACTION_CREATOR,
        params: {type, payload}
      });
    }
    else {
      setTimeout(()=>{
        (async ()=>{
          ({type, payload} = params);

          var shouldContinue = true;
          if (typeof params.beforeSend === 'function') {
            var results = await params.beforeSend();
            if (results === false) {
              shouldContinue = false;
            }
          }

          if (shouldContinue) {
            if (typeof params.send === 'function') {
              params.send();
            }
            else {
              AppDispatcher.dispatch({
                actionType: AppConstants.ACTION_CREATOR,
                params: {type, payload}
              });
            }
          }
        })();
      }, 1);
    }
  }
}

module.exports = ActionCreator;