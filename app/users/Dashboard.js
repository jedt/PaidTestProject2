'use strict';

var React = require('react');
var ReactNative = require('react-native');
var AppConstants = require('../constants/AppConstants');
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
  Navigator,
  StatusBar,
  Image,
  InteractionManager
} = ReactNative;

var styles = StyleSheet.create({
  ...MainStyleSheet,
  content : {
    height: deviceHeight - StatusBar.currentHeight,
  },

  mainContainer: {
    height: deviceHeight - 56 - StatusBar.currentHeight,
    backgroundColor: '#F0F0F0'
  },

  footer: {
    height: 56,
    width: deviceWidth,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#DDDDDD'
  },

  footerCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

var Dashboard = React.createClass({
  popDashboardNav: function() {
    InteractionManager.runAfterInteractions(() => {
      this.refs.navHome.pop();
    });
  },

  setNav: function(nav, args ,route) {
    InteractionManager.runAfterInteractions(() => {
      nav.push(route);
    });
  },

  _handleOnChangeView: function() {
    var currentView = AppStore.getView();
    switch (currentView) {
      case 'ProjectTasks':
          this.setNav(
            this.refs.navHome,
            {action: 'push'},
            DashboardRoutes.getProjectTasks()
          );
        break;
      case 'ProjectSettings':
          this.setNav(
            this.refs.navHome,
            {action: 'push'},
            DashboardRoutes.getProjectSettings()
          );
        break;
      case AppConstants.POP_DASHBOARD_NAV:
          this.popDashboardNav();
        break;
      default:
        break;
    }
  },

  componentWillMount: function() {
    AppStore.addChangeViewListener(this._handleOnChangeView);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeViewListener(this._handleOnChangeView);
  },

  _renderScene: function(route, navigator) {
    var Component = route.component;
    var toolbar = route.toolbar;

    return (
      <View style={{height: deviceHeight - StatusBar.height}}>
        {toolbar}
        <Component
          options={route.options}
          route={route}
        />
      </View>
    );
  },

  render: function() {
    return (
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <Navigator
            ref="navHome"
            renderScene={this._renderScene}
            initialRoute={DashboardRoutes.getHome()}
            configureScene={(route, routeStack) =>
                                Navigator.SceneConfigs.FadeAndroid}
          />
        </View>
        <View style={styles.footer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.footerCol}>
              <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View style={[styles.buttonFlat]}>
                    <Image
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                      source={require('app/images/ic_dashboard.png')}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.footerCol}>
              <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View style={[styles.buttonFlat]}>
                    <Image
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                      source={require('app/images/ic_check_circle.png')}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.footerCol}>
              <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View style={[styles.buttonFlat]}>
                    <Image
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                      source={require('app/images/ic_plus.png')}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.footerCol}>
              <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View style={[styles.buttonFlat]}>
                    <Image
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                      source={require('app/images/ic_calendar.png')}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.footerCol}>
              <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  delayPressIn={0}
              >
                <View style={styles.buttonWrapper48}>
                  <View style={[styles.buttonFlat]}>
                    <Image
                      style={{height: 24, width: 24}}
                      resizeMode="contain"
                      source={require('app/images/ic_cog.png')}
                    />
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  },
});

module.exports = Dashboard;