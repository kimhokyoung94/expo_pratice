import React, { Component } from "react";

import { View, Text, props } from "react-native";
import GreetingGroup from "./GreetingGroup";

export default class Greeting extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "orange" }}>
        <Text style={{ color: "black", fontSize: 30, fontStyle: "italic" }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
