'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Home = require('../users/Home');
var ProjectTasks = require('../projects/ProjectTasks');
var ProjectSettings = require('../projects/ProjectSettings');
var Actions = require('../actions/Actions');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ToolbarAndroid,
  TouchableNativeFeedback
} = ReactNative;

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#39A1E7',
    height: 56,
  },
});

var DashboardRoutes = {
  getHome: function(options) {
    return {
      options: options,
      component: Home,
      toolbar:
        <ToolbarAndroid
          onIconClicked={()=>{
            Actions.popDashboardNav()
          }}
          elevation={4}
          style={styles.toolbar}
          titleColor={'#FFFFFF'}
          title={'Dashboard'}
        />
    };
  },

  getProjectTasks: function(options) {
    return {
      options: options,
      component: ProjectTasks,
      toolbar:
        <ToolbarAndroid
          navIcon={require('app/images/ic_arrow_back_black_24dp.png')}
          onIconClicked={()=>{
            Actions.popDashboardNav()
          }}
          elevation={4}
          style={styles.toolbar}
          titleColor={'#FFFFFF'}
          title={'ProjectTasks'}
        />
    };
  },


  getProjectSettings: function(options) {
    return {
      options: options,
      component: ProjectSettings,
      toolbar:
        <ToolbarAndroid
          navIcon={require('app/images/ic_arrow_back_black_24dp.png')}
          onIconClicked={()=>{
            Actions.popDashboardNav()
          }}
          elevation={4}
          style={styles.toolbar}
          titleColor={'#FFFFFF'}
          title={'ProjectSettings'}
        />
    };
  },
};

module.exports = DashboardRoutes;