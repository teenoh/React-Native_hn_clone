import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to hackers news Clone</Text>
        <TouchableHighlight onPress={ () => this.props.navigation.navigate('login')}>
            <Text style={{width:"50%" ,backgroundColor: "#1abc9c", color: "#fff", paddingTop: 9, paddingBottom: 9, paddingLeft: 15, paddingRight: 15}}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => this.props.navigation.navigate('register')} style={{marginTop: 30}}>
            <Text style={{width:"50%" ,backgroundColor: "#f3f3f3", color: "#000", paddingTop: 9, paddingBottom: 9, paddingLeft: 15, paddingRight: 15}}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
