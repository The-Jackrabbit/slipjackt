import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

export default class Albums extends Component {

  render() {
    return (
      <View style={{backgroundColor:"#dddddd"}}>
        <Text> This page is for albums </Text>
        <Button  title="Yo" onPress={() => {this.props.navigator.pop()}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Albums', () => Albums);
