import React from "react";
import { TouchableOpacity, Text } from "react-native";

class SampleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => alert("버튼 클릭")}>
        <Text>나의 버튼</Text>
      </TouchableOpacity>
    );
  }
}
