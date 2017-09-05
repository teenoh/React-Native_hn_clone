import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button

const styles = {
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
    alignSelf: "center",
    color: "black",
    fontSize: 16
  }
};

