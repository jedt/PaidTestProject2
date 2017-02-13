'use strict';

var React = require('react');
var ReactNative = require('react-native');
var ActionCreator = require('../actions/ActionCreator');
var AppStore = require('../stores/AppStore');
var MainStyleSheet = require('../stylesheets/Main');
var deviceHeight = require('Dimensions').get('window').height;
var deviceWidth = require('Dimensions').get('window').width;

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  StatusBar
} = ReactNative;

var styles = StyleSheet.create({
  ...MainStyleSheet,
  content : {
    justifyContent: 'center',
    height: deviceHeight - StatusBar.currentHeight,
  },
});

var Login = React.createClass({
  _handleOnPressLogin: function() {
    ActionCreator.sendWithDispatch('OnLoginPressed');
  },
  render: function() {
    return (
      <View style={styles.content}>
        <View style={styles.formWrapper}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input}/>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input}/>
          </View>

          <View>
            <TouchableNativeFeedback
                  onPress={this._handleOnPressLogin}
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View elevation={2} style={[styles.activeButton]}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    );
  },
});

module.exports = Login;