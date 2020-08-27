import React, { Component } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";

import FlatListProPs from "./FlatListProPs";
import data from "./telList";

function TelBookItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#123124",
      }}
      onPress={() => alert(item.tel)}
    >
      <Text
        style={{
          width: "50%",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          width: "50%",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "blue",
        }}
      >
        {item.tel}
      </Text>
    </TouchableOpacity>
  );
}

export default class Tellserch extends Component {
  constructor(props) {
    super(props);
    this.state = { serchText: "" };
  }
  render() {
    return (
      <View style={{ padding: 10, width: "80%" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "100%",
          }}
          placeholder="입력해주세요."
          onChangeText={(serchText) => this.setState({ serchText })}
          value={this.state.serchText}
        />
        data={data}
        renderItem={" "}
        {({ item }) => {
          if (this.state.serchText === "") {
            return <FlatListProPs item={item} />;
          }
          if (this.state.serchText === item.name) {
            return <FlatListProPs item={item} />;
          }
        }}
      </View>
    );
  }
}
