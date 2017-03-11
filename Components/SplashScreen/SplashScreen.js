import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, 
  Button,
  TextInput,
  Navigator,
  AsyncStorage
} from 'react-native';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      myKey:"man"
    }
  }
  componentDidMount() {
    AsyncStorage.getItem("myKey").then((value) => {
      this.setState({"myKey": value});
    });
  }

  onPress() {
      this.props.navigator.push({
          id: 'HomeScreen'
      });
    }
  render() {
    if (this.state.myKey !== 'man') {
      return (
      <View style={styles.splash}>
        <Image source={require('./record325.png')} style={styles.imageStyle2}/>
        <Text style={styles.jeffery}> Hey {this.state.myKey}, what's up?</Text>
        <View style={styles.nameEntry}>  
           <Button title="Start" onPress={() => {this.onPress()}} style={styles.buttonStyle}/>
        </View>
      </View>
    );
    }
    return (
      <View style={styles.splash}>
        <Image source={require('./record225.png')} style={styles.imageStyle}/>
        <Text style={styles.jeffery}> Hey {this.state.myKey}, what's up?  Go ahead and put your {'\n'} first name in the box below </Text>
        <View style={styles.nameEntry}>  
            <TextInput onChangeText={(text) => this.saveData(text)} style={styles.inputStyle}> Enter Name Here</TextInput> 
            <Button title="Start" onPress={() => {this.onPress()}} style={styles.buttonStyle}/>
        </View>
      </View>
    );
  }

  saveData(value) {
    AsyncStorage.setItem("myKey", value);
    this.setState({"myKey": value});
  };
}



const styles = StyleSheet.create({

  jeffery: {
    textAlign:'center',
    fontSize: 18,
    margin: 15
  },
  nameEntry: {
      flexDirection: 'row',
      marginHorizontal: 95,
      height:40
  },
  inputStyle: {
    flex: 1,
    fontSize:18
  },
  buttonStyle: {
    flex: 1
  },
  imageStyle: {
      marginTop:25,
      width:225,
      height:225,
      borderBottomWidth: 10, 
      borderColor: "#a7d49b"
  },
  imageStyle2: {
      marginTop:25,
      width:325,
      height:325,
      borderBottomWidth: 10, 
      borderColor: "#a7d49b"
  },
  splash: {
    height:'100%',
    alignItems: 'center',
    backgroundColor:"#a7d49b"
  }

});

AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
