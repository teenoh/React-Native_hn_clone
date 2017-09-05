import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Button from '../components/Button'
import Header from '../components/Header'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextStyle}>Hacker News</Text>
          <Text style={styles.smallHeaderTextStyle}>Get up to date news on tech stuff</Text>
        </View>

        <View style={styles.buttonView}>
          <Button>Login</Button>
          <Button>Register</Button>
        </View>

        <View style={styles.bottomTextView}>
          <Text style={styles.bottomTextStyle}> Hacker News clone</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#ff6600"
  },

  headerTextView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTextStyle: {
    fontSize: 40,
    color: "white"
  },

  smallHeaderTextStyle: {
      fontSize:20,
      color:"white"
  },

  buttonView: {
    flex: 0.3,
    flexDirection: "row"
  },

  bottomTextView:  {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 8
  },

  bottomTextStyle: {
    color: "white",  

  }
};
