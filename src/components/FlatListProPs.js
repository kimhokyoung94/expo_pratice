import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
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

export default class FlatListProPs extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 52, wiidth: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <TelBookItem item={item} />;
          }}
        />
      </View>
    );
  }
}
