import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Header = props => {
    const {viewStyle, textStyle } = styles
    return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    background: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    elevation: 5
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;