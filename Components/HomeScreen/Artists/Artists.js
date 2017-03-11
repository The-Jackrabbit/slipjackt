import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, ScrollView,
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import ToolBar from '../../ToolBar';
import BaseBar from '../../BaseBar';
import ArtistPage from '../Artists/ArtistPage';
import * as firebase from 'firebase';



export default class Artists extends Component {

   navigate(route) {
     this.props.navigator.push({id: route});
   }
  
  render() {
    artists = [];

    var query = firebase.database().ref("react").orderByKey();
    
   // for each user that is online, output to the console
    query.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var k = childSnapshot.exportVal();
    // childData will be the actual contents of the child
    artists.push(
      <View style={styles.artistEntry}> 
            <Text > hi </Text>
      </View>
    )
  });
}, );

    return (
      <View style={styles.page}>
        <View><ToolBar sceneName={'Artists'} navigator={this.props.navigator}/></View>
        <View style={{flex: 1}}>
          <ScrollView>
            {artists}
          </ScrollView>
        </View>
        <BaseBar navigator={this.props.navigator}/>
      </View>
    );
  }
}
const styles = {
    page : {
        backgroundColor: '#bbbbbb',
        height: '100%',
        flexDirection: 'column'
    },
    artistName : {
        flex: 3,
        backgroundColor: '#ffffff',
        fontSize : 30
    },
    artistEntry : {
        flexDirection: 'row',
        height: 50,
        marginBottom : 1
    }
}


AppRegistry.registerComponent('Artists', () => Artists);
