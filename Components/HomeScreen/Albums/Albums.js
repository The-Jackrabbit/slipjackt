import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, ScrollView,
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import ToolBar from '../../ToolBar';
import BaseBar from '../../BaseBar';

export default class Albums extends Component {

  navigate(route) {
    this.props.navigator.push({id: route});
  }

  render() {

    albumCount = 6;

    albums = [];

    while (albumCount > 0) {
        albums.push(
        <TouchableHighlight key = {albumCount} onPress={() => {this.navigate('Record')}}>
            <View style={styles.albumEntry}>
                <View style={styles.albumInfo}>
                    <Text style={styles.albumName}>Sweet Emotion</Text>
                    <Text style={styles.artist}> Aerosmith </Text>
                </View>
                <View style={styles.albumArt}>
                        <Image />
                </View>
            </View>
        </TouchableHighlight>
      )
      albumCount--;
    }

    return (
     <View style={styles.page}>
          <View>
              <ToolBar sceneName={'Album'} navigator={this.props.navigator}/>
          </View>
          <View style={styles.albumList}>
             <ScrollView>
                {albums}
             </ScrollView>
          </View>
          <BaseBar navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    albumInfo : {
        marginLeft: 5,
        flexDirection : 'column',
        flex: 3
    },
    artist : {
        fontSize : 15
    },
    page : {
        height: '100%', 
        flexDirection: 'column',
        backgroundColor:'#bbbbbb'
    },
    albumArt :{
        flex:1,
        marginRight:4,
        marginVertical:4,
        borderWidth: 1,
        borderColor: '#000000'
    },
    albumName : {
        fontSize : 30
    },
    albumEntry : {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: 110,
        marginBottom:1
    },
    albumList : {
        flex: 1,
        backgroundColor:'#bbbbbb'
    }
});

AppRegistry.registerComponent('Albums', () => Albums);
