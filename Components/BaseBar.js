import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

class BaseBar extends Component {
  navigate(route) {
    this.props.navigator.push({id: route});
  }
  render() {
    return (
      <View style={styles.body}>
            <Text onPress={() => {this.navigate('Albums')}} style={styles.options}> Al </Text>
            <Text onPress={() => {this.navigate('SevenInch')}} style={styles.options}> 7" </Text>
            <Text onPress={() => {this.navigate('AddScreen')}} style={styles.pageTitle}> + </Text>
            <Text onPress={() => {this.navigate('TwelveInch')}} style={styles.options}> 12" </Text>
            <Text onPress={() => {this.navigate('Artists')}} style={styles.options}> Ar </Text>
      </View>
    );
  }
}

BaseBar.propTypes = {
    navigator : React.PropTypes.object.isRequired

}

const styles = StyleSheet.create({
    body : {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: "#dddddd",
        backgroundColor: "#ffffff"
    },
    backButton: {
        flex: 3
    },
    pageTitle : {
        flex: 4,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:40,
        borderColor: "#dddddd"
    },
    options : {
        flex: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:20,
        borderColor: "#dddddd"
    }
});

export default BaseBar;
