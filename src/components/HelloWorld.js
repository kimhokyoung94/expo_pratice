import React, { Component } from "react";

import { View, Text } from "react-native";

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black" }}>
        <Text style={{ color: "red", fontSize: 50, fontStyle: "italic" }}>
          HelloWorld
        </Text>
      </View>
    );
  }
}
