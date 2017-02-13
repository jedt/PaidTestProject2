'use strict';

var React = require('react');

var ReactNative = require('react-native');

var {
  StyleSheet
} = ReactNative;

var Main = {
textLabel: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    color: 'rgba(0,0,0, 0.87)',
  },
  formWrapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 20,
    color: '#969696'
  },
  input: {
    borderColor: '#0f0f0f',
    fontFamily: 'Roboto',
    fontSize: 16,
    height: 48,
    fontWeight: '400',
    padding: 2
  },

  buttonWrapper48: {
    height: 48,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  buttonFlat: {
    justifyContent: 'center',
    height:36,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 2,
    backgroundColor: '#FFFFFF'
  },
  buttonFlat48: {
    justifyContent: 'center',
    height:48,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#D3D3D3'
  },
  buttonFlatText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'normal',
    opacity: 0.87
  },

  activeButton: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    height:36,
    backgroundColor: '#39A1E7',
    borderWidth: 1,
    borderColor: '#39A1E7',
    borderRadius: 2
  },

  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500'
  },
};

module.exports = Main;