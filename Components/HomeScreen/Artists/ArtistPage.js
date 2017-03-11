import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, ScrollView, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import ToolBar from '../../ToolBar';
import BaseBar from '../../BaseBar';


export default class ArtistPage extends Component {

  navigate(route) {
    this.props.navigator.push({id: route});
  }

  render() {
    albumCount = 6;

    albums = [];

    while (albumCount > 0) {
        albums.push(
        <View key = {albumCount} style={styles.albumEntry}  > 
          <Text onPress={() => {this.navigate('Record')}} style={styles.albumName}> Dopesmoker </Text>
          <View style={styles.albumArt}>
                <Image />
            </View>
        </View>
      )
      albumCount--;
    }

    return (
      <View style={styles.page}>
        <View><ToolBar sceneName={this.props.artistName} navigator={this.props.navigator}/></View>
        <View style={{flex: 1}}>
          <ScrollView>
            {albums}
          </ScrollView>
        </View>
        <BaseBar navigator={this.props.navigator}/>
      </View>
    );
  }
}

ArtistPage.propTypes = {
    navigator : React.PropTypes.object.isRequired,
    artistName : React.PropTypes.string.isRequired,
    albumList : React.PropTypes.array.isRequired

}

const styles = {
    page : {
        height: '100%', 
        flexDirection: 'column',
        backgroundColor:'#bbbbbb'
    },
    albumArt :{
        flex:1,
        marginRight:4,
        marginVertical:4,
        borderWidth: 2,
        borderColor: '#000000'
    },
    albumName : {
        flex: 3,
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
}

AppRegistry.registerComponent('ArtistPage', () => ArtistPage);
