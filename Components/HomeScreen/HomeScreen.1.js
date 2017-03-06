import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';



export default class HomeScreen extends Component {

  onPress() {this.props.navigator.push({id: 'SplashScreen'});}
  artistOnPress() {this.props.navigator.push({id: 'Artists'});}
  albumsOnPress() {this.props.navigator.push({id: 'Albums'});}

  render() {
    return (
      <View>
        <View>
            <TextInput style={styles.searchBar}>Search</TextInput>
        </View>
        <View style={styles.row}>
            <Text onPress={() => {this.artistOnPress()}} style={styles.rowText}>Artists</Text>
        </View>
        <View style={styles.row}>
            <Text onPress={() => {this.albumsOnPress()}} style={styles.rowText}>Albums</Text>
        </View>
        <Button  title="Yo" onPress={() => {this.onPress()}}/>
      </View>
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

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
