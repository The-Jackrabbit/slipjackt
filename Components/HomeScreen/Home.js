import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import Albums from './Components/HomeScreen/Albums/Albums';


export default class Home extends Component {

  onPress() {this.props.navigator.push({id: 'SplashScreen'});}
  artistOnPress() {this.props.navigator.push({id: 'Artists'});}
  albumsOnPress() {this.props.navigator.push({id: 'Albums'});}

  renderScene(route, navigator) {
    switch(route.id) {
      case 'SplashScreen':
        return (<SplashScreen navigator={navigator} title="SplashScreen" />)
      case 'HomeScreen':
        return (<HomeScreen navigator={navigator} title="HomeScreen" />)
      case 'Albums':
        return (<Albums navigator={navigator} title="Albums" />)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{id: 'HomeScreen'}}
        renderScene= {this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}


const styles = StyleSheet.create({
    searchBar: {
        marginLeft: '10%'
    },
    backButton: {
        position:'absolute',
        bottom:'0'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor:"#ffffff",
        marginBottom:3
    },
    rowText : {
        fontSize: 20,
        flex:1
    }
});

AppRegistry.registerComponent('Home', () => Home);
