import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

import ToolBar from '../ToolBar';
import BaseBar from '../BaseBar';


export default class HomeScreen extends Component {
  constructor() {
      super();
      this.navigate = this.navigate.bind(this);
  }
  

  navigate(route) {
    this.props.navigator.push({id: route});
  }

  render() {
    return (
      <View style={styles.page}>
        <View>
            <ToolBar sceneName={'Home'} navigator={this.props.navigator}/>
        </View>

        <View style={styles.list}>

            <View>
                <TextInput style={styles.searchBar}>Search</TextInput>
            </View>
            
            <TouchableHighlight underlayColor='#bbbbbb' style={styles.row}  onPress={() => {this.navigate('Artists')}}>
                <Text style={styles.rowText}>Artists</Text>
            </TouchableHighlight>
               
            
            <TouchableHighlight underlayColor='#bbbbbb' style={styles.row} onPress={() => {this.navigate('Albums')}}>
                <Text style={styles.rowText}>Albums</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#bbbbbb' style={styles.row} onPress={() => {this.navigate('SevenInch')}}>
                <Text style={styles.rowText}>7"</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#bbbbbb' style={styles.row} onPress={() => {this.navigate('TwelveInch')}}>
                <Text style={styles.rowText}>12"</Text>
            </TouchableHighlight>

        </View>
        
         <BaseBar navigator={this.props.navigator}/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    addButton : {
        margin:1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 48,
        borderWidth: 2,
        borderColor: "#aaaaaa"
    },
    list: {
        flex:1

    },
    searchBar: {
        marginLeft: '10%'
    },
    backButton: {
        alignSelf: 'center',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor:"#ffffff",
        marginBottom:3
    },
    rowText : {
        fontSize: 30,
        flex:1
    },
    page: {
        height: '100%',
        flexDirection: 'column'
    }
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
