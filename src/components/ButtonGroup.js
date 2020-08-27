import React, { Component } from "react";
import { View, Button, Text } from "react-native";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "김호경",
      count: 0,
    };
  }
  onPressButton1() {
    alert("버튼 클릭 2");
  }
  alertStateName() {
    alert(this.state.name);
  }
  render() {
    return (
      <View>
        <Button title="눌러주세요" onPress={() => alert("버튼 클릭1")} />
        <Button title="버튼 2 클릭" onPress={this.onPressButton1} />
        <Button title="이름 보기" onPress={this.alertStateName.bind(this)} />

        <Text>홈 버튼이 {this.state.count + 1}번 터치되었습니다. </Text>
      </View>
    );
  }
}
