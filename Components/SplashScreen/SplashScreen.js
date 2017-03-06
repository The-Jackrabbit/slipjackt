import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, 
  Button,
  TextInput,
  Navigator
} from 'react-native';

export default class SplashScreen extends Component {

  onPress() {
        this.props.navigator.push({
            id: 'HomeScreen'
        });
    }
  render() {
    return (
      <View style={styles.splash}>
        <Image source={require('./test_record.png')} style={styles.imageStyle}/>
        
        <Text style={styles.jeffery}> Hey man, what's up?  Go ahead and put your {'\n'} first name in the box below </Text>
        <View style={styles.nameEntry}>  
            <TextInput style={styles.inputStyle}> Enter Name Here</TextInput> 
            <Button title="Start" onPress={() => {this.onPress()}} style={styles.buttonStyle}/>
        </View>
      </View>
    );
  }
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
  splash: {
    height:'100%',
    alignItems: 'center',
    backgroundColor:"#a7d49b"
  }

});

AppRegistry.registerComponent('SplashScreen', () => SplashScreen);
