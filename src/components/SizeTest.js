import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SizeTest extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: "black",
            backgroundColor: "blue",
            width: 50,
            height: 50,
          }}
        >
          blue
        </Text>
        <Text
          style={{
            color: "white",
            backgroundColor: "black",
            width: 100,
            height: 100,
          }}
        >
          black
        </Text>
        <Text
          style={{
            color: "black",
            backgroundColor: "red",
            width: 150,
            height: 150,
          }}
        >
          red
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
