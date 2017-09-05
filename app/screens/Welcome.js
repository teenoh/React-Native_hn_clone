import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerTextStyle}>Hacker News</Text>
          <Text style={styles.smallHeaderTextStyle}>Get up to date news on tech stuff</Text>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}> Register </Text>
          </TouchableOpacity>
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
    flex: 4,
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

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: "black",
    fontSize: 16,
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
