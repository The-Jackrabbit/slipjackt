/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import SplashScreen from './Components/SplashScreen/SplashScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Albums from './Components/HomeScreen/Albums/Albums';

export default class slipjackt extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'SplashScreen':
        return (<SplashScreen navigator={navigator} title="SplashScreen" />)
      case 'HomeScreen':
        return (<HomeScreen navigator={navigator} title="HomeScreen"/>)
      case 'Albums':
        return (<Albums navigator={navigator} title="Albums"/>)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id: 'SplashScreen'}}
        renderScene= {this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#a7d49b"
  }
});

AppRegistry.registerComponent('slipjackt', () => slipjackt);
