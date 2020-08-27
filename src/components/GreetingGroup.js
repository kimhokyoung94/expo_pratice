import React, { Component } from "react";

import { View, Text, props } from "react-native";
import Greeting from "./Greeting";

export default class GreetingGroup extends Component {
  render() {
    const nameList = this.props.nameList;
    return (
      <View>
        {nameList.map((name) => {
          return <Greeting name={name} key={name} />;
        })}
        {/* <Greeting name="참새"></Greeting>
        <Greeting name="짹짹"></Greeting>
        <Greeting name="염소"></Greeting>
        <Greeting name="음메"></Greeting> */}
      </View>
    );
  }
}
