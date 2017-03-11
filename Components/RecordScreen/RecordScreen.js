import React, { Component } from 'react';
import {AppRegistry,StyleSheet,ListView,Text,View,Image,ScrollView,
        Button,TextInput,Navigator,TouchableHighlight} from 'react-native';
import * as firebase from 'firebase';


const songs = [{name: 'Emily',length:'10:53', side:'A1'}, {name: 'Monkey & Bear', length:'7:49',side:'B1'},
                {name: 'Sawdust & Diamonds', length:'7:23',side:'B2'}, 
                {name: 'Only Skin', length:'16:43',side:'C1'}, {name: 'Cosmia', length:'10:53',side:'D1'}]

import ToolBar from '../../Components/ToolBar';
import BaseBar from '../BaseBar';

export default class RecordScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            albumDataSource: ds.cloneWithRows(songs),
            artist: '',
            album: '',
            year: '',
        };
    }

    componentDidMount() {
      const rootRef = firebase.database().ref().child('react/' + this.props.artist + '/' + this.props.album);
      const yearRef = rootRef.child('year');
      yearRef.on('value', snap => {
          this.setState({
              year: snap.val()
          })
      })
    }

    renderRow(song, sectionId, rowId, highlightRow) {
        return(
        <View style={styles.row}>
            <Text >{song.side} </Text>
            <Text style={styles.rowText}>{song.name}</Text>
            <Text style={styles.songLength}>{song.length}</Text>
        </View>
        )
    }

  render() {
      
    return (
     <View style={styles.page}>
         <View>
            <ToolBar sceneName={this.props.album} navigator={this.props.navigator}/>
         </View>
         <View style={{flex: 1}}>
            <View style={styles.header}>
                <View style={styles.idHead}> 
                    <Text style={styles.recordName}> {this.props.album} </Text>
                    <Text style={styles.artistName}> {this.props.artist} </Text>
                    <Text style={styles.artistName}> {this.state.year}</Text>
                </View>
                <View style={styles.albumArt}>
                    <Image source={[{uri:  'https://facebook.github.io/react/img/logo_small.png',
                                    width:10, height: 10}]}/>
                </View>
            </View>
            <View style={styles.imageZone}>
                <Image />
            </View>
            <View>
                <ListView style={styles.tracklist}
                dataSource={this.state.albumDataSource}
                renderRow={this.renderRow.bind(this)}/>
            </View>
        </View>
        <View>
            <BaseBar navigator={this.props.navigator}/>
        </View>  
      </View>
    );
  }
}

RecordScreen.propTypes = {
    album : React.PropTypes.string.isRequired,
    artist : React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    page : {
        flexDirection: 'column',
        height: '100%'
    },
    songLength : {
        flex:1,
        justifyContent: 'flex-end'
    },
    imageZone : {
        flexDirection: 'row',
        height: 50,
        margin: 16,
        borderWidth: 2
    },
    header :{
        flexDirection: 'row'
    },
    idHead :{
        flex: 3,
        paddingLeft:16,
        paddingTop:16
    },
    recordName : {
        fontSize: 36
    },
    artistName :{
        fontSize: 18
    },
    albumArt :{
        flex:1,
        marginRight:16,
        marginTop:16,
        borderWidth: 2,
        borderColor: '#000000'
    },
    row: {
        width:'100%',
        flexDirection: 'row',
        paddingVertical: 10,
        marginBottom:3
    },
    rowText : {
        flex:3,
        paddingLeft:16
    },
    tracklist: {
        width:'100%',
        margin: 16
    }
    
});

AppRegistry.registerComponent('RecordScreen', () => RecordScreen);
