// slipjackt/ 0.1 +https://github.com/The-Jackrabbit
import * as firebase from 'firebase';

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, Item, AsyncStorage,
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import SplashScreen from './Components/SplashScreen/SplashScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Albums from './Components/HomeScreen/Albums/Albums';
import Artists from './Components/HomeScreen/Artists/Artists';
import RecordScreen from './Components/RecordScreen/RecordScreen';
import ArtistPage from './Components/HomeScreen/Artists/ArtistPage';
import TestPage from './Components/TestPage';
import SevenInch from './Components/HomeScreen/7_Inch/7_Inch';
import TwelveInch from './Components/HomeScreen/12_Inch/12_Inch';

import ToolBar from './Components/ToolBar';
import BaseBar from './Components/BaseBar';
import AddScreen from './Components/AddScreen';

const songs = [{name: 'Emily',length:'10:53', side:'A1'}, {name: 'Monkey & Bear', length:'7:49',side:'B1'},
                {name: 'Sawdust & Diamonds', length:'7:23',side:'B2'}, 
                {name: 'Only Skin', length:'16:43',side:'C1'}, {name: 'Cosmia', length:'10:53',side:'D1'}]

// Initialize Firebase
const firebaseConfig = {
};
firebase.initializeApp(firebaseConfig);

export default class slipjackt extends Component {

  renderScene(route, navigator) {
    switch(route.id) {
      case 'SplashScreen':
        return (<SplashScreen navigator={navigator} title="SplashScreen" />)
      case 'HomeScreen':
        return (<HomeScreen navigator={navigator} title="HomeScreen"/>)
      case 'Albums':
        return (<Albums navigator={navigator} title="Albums"/>)
      case 'Artists':
        return (<Artists navigator={navigator} title="Artists"/>)
      case 'Record':
        return (<RecordScreen navigator={navigator} artist="Sleep" album='Dopesmoker'/>)
      case 'ArtistPage':
        return (<ArtistPage  navigator={navigator} artistName="Sleep" albumList={[]}/>)
      case 'SevenInch':
        return (<SevenInch navigator={navigator}/>)
      case 'TwelveInch':
        return (<TwelveInch navigator={navigator}/>)
      case 'AddScreen':
        return (<AddScreen navigator={navigator}/>)
    }
  }

  render() {
    return (
    
      <Navigator 
        initialRoute={{id: 'SplashScreen'}}
        renderScene= {this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      /> 
     
      //<View><Button title='hi'/></View>
      //<View><ToolBar artistName={'Sleep'} albumList = {null}/></View>
      
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
