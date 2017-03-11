/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';

import React, { Component} from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, Picker,
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';


const Item = Picker.Item;

import ToolBar from './ToolBar';
import BaseBar from './BaseBar';


class AddScreen extends Component {
  constructor() {
    super();
    this.state = {
        artist: '',
        album: '',
        year: '',
        speed: '',
    };
  }

  upload() {
    const rootRef = firebase.database().ref().child('react/' + this.state.artist + '/' + this.state.album);
    if (this.state.album !== '' && this.state.artist !== '' && this.state.year !== '') {
        rootRef.set({
          album: this.state.album,
          artist: this.state.artist,
          year: this.state.year
        })
        this.props.navigator.pop()
    }
  }

  render() {
    return (
      <View style={styles.page} >

        <View>
            <ToolBar sceneName={'Add Record'} navigator={this.props.navigator}/>
        </View>
        <View style={styles.list}>
          <View style={styles.mainInputs}>
              <View style={styles.albumArt}>
                <Image />
              </View>
              <View style={styles.mainTextFields}> 
                  <View style={styles.entry}> 
                      <TextInput defaultValue= 'Artist' style={styles.fieldInput} onChangeText={(text) => {this.setState({artist: text})}}/>
                  </View>
                  <View style={styles.entry}> 
                      <TextInput defaultValue= 'Album' style={styles.fieldInput} onChangeText={(text) => {this.setState({album: text})}}/>
                  </View>
                  <View style={styles.entry}> 
                      <TextInput defaultValue= 'Year' style={styles.fieldInput} onChangeText={(text) => {this.setState({year: text})}}/>
                  </View>
              </View>
          </View>

          <View style={styles.row}>
          <View style={styles.label}>
            <Text>Speed: </Text>
          </View>  
          <Picker
            style={styles.picker}
            onValueChange={(rpm) => this.setState({speed: rpm})}>
            <Item label="33rpm" value="key0" />
            <Item label="45rpm" value="key1" />
            <Item label="78rpm" value="key1" />
            <Item label="Custom" value="key1" />
          </Picker>

         </View>
         
       
         <View style={styles.row}>
          <View style={styles.label}>
            <Text>Color: </Text>
          </View>  
          <TextInput style={styles.picker}/>

         </View>

        <View style={styles.row}>
          <View style={styles.label}>
            <Text>Size: </Text>
          </View>  
          <TextInput style={styles.picker}/>

         </View>

          <View style={styles.row}>
          <View style={styles.label}>
            <Text># of LPs: </Text>
          </View>  
          <TextInput style={styles.picker}/>

         </View>

        </View>
        <Button title='Upload' onPress={() => {this.upload()}}/>
        
        <BaseBar navigator={this.props.navigator}/>
      </View>
    );
  }

}

AddScreen.propTypes = {
    navigator : React.PropTypes.object.isRequired

}

const styles = StyleSheet.create({
  label : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row : {
    flexDirection: 'row',
    width: '100%'
  },
  picker : {
    flex: 4,
    marginRight:15
  },
  mainTextFields : {
    flex: 2
  },
  albumArt : {
    flex:1.2,
    marginRight:10,
    marginVertical:4,
    borderWidth: 1,
    borderColor: '#000000'
  },
  mainInputs : {
    flexDirection: 'row',
    margin: 10
  },
  list: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  page : {
    height: '100%', 
    flexDirection: 'column',
    backgroundColor:'#bbbbbb'
  },
  entry : {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      marginVertical: 1
  },
  fieldText : {
    textAlign: 'center',  
    fontSize: 25
  },
  fieldInput : {
      flex: 2,
      fontSize: 20
  }
});

export default AddScreen;
