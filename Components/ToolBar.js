import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image, 
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';

class ToolBar extends Component {
  
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.backButton}>
            <Button  title="Back" onPress={() => {this.props.navigator.pop()}}/>
        </View>
        <Text style={styles.pageTitle}> {this.props.sceneName} </Text>
        <Text style={styles.options}> ... </Text>
      </View>
    );
  }
}

ToolBar.propTypes = {
    navigator : React.PropTypes.object.isRequired,
    sceneName : React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    body : {
        flexDirection: 'row',
        backgroundColor: "#ffffff"
    },
    backButton: {
        flex: 1
    },
    pageTitle : {
        flex: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:20,
        borderColor: "#dddddd"
    },
    options : {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:20,
        borderColor: "#dddddd"
    }
});

export default ToolBar;
