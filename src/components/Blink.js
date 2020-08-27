import React from "react";
import { View, Text } from "react-native";

export default class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    setInterval(() => {
      this.setState({ visible: !this.state.visible });
    }, 500);
  }

  render() {
    const { innerText } = this.props;
    return (
      <View>
        <Text>{this.state.visible ? innerText : " "}</Text>
        <Text></Text>
      </View>
    );
  }
}
