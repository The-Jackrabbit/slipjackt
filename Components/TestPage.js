/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
class TestPage extends Component {
  
  render() {

    artists = ['hi'];

    var query = firebase.database().ref('react');
    

   // for each user that is online, output to the console
   
   var t = [query.child('Joanna Newsom/Ys')];
    artists.push(t);
    return (
      <View >
        <Text> Hi Everyone!</Text>
        <Text> {t} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  entry : {
      flexDirection: 'row'
  },
  fieldText : {
    textAlign: 'center',  
    fontSize: 25
  },
  fieldInput : {
      flex: 2
  }
});

export default TestPage;
