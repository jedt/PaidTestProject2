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

var Home = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              delayPressIn={0}
              onPress={()=>{
                ActionCreator.sendWithDispatch('DashboardNavToProjectTasks');
              }}
          >
            <View style={styles.buttonWrapper48}>
              <View elevation={2} style={[styles.buttonFlat]}>
                <Text style={styles.buttonFlatText}>Project Tasks</Text>
              </View>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              delayPressIn={0}
              onPress={()=>{
                ActionCreator.sendWithDispatch('DashboardNavToProjectSettings');
              }}
          >
            <View style={styles.buttonWrapper48}>
              <View elevation={2} style={[styles.buttonFlat]}>
                <Text style={styles.buttonFlatText}>Project Settings</Text>
              </View>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              delayPressIn={0}
          >
            <View style={styles.buttonWrapper48}>
              <View elevation={2} style={[styles.buttonFlat]}>
                <Text style={styles.buttonFlatText}>Create Project</Text>
              </View>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              delayPressIn={0}
          >
            <View style={styles.buttonWrapper48}>
              <View elevation={2} style={[styles.buttonFlat]}>
                <Text style={styles.buttonFlatText}>Edit Project</Text>
              </View>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              delayPressIn={0}
          >
            <View style={styles.buttonWrapper48}>
              <View elevation={2} style={[styles.buttonFlat]}>
                <Text style={styles.buttonFlatText}>Notifications</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  },
});

module.exports = Home;