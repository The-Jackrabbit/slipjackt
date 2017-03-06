import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

export default class Artists extends Component {

  render() {
    return (
      <View>
        <Text>This page is for artists</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Artists', () => Artists);
