import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextStyle}>Hacker News</Text>
          <Text>Get up to date news on tech stuff</Text>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}> Register </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.5 }}>
          <Text> Hacker News clone</Text>
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
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },

  headerTextStyle: {
    fontSize: 30,
    color: "white"
  },

  buttonView: {
    flex: 0.3,
    flexDirection: "row"
  },

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
},

  bottomTextStyle: {}
};
