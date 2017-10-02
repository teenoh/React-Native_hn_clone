import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
        <Text style={{fontSize: 20, marginBottom: 100}}>This is the Login Page</Text>
        <Button
            onPress={ () => this.props.navigation.navigate('register')}
            title="Go to Register Screen"
        />
      </View>
    );
  }
}
