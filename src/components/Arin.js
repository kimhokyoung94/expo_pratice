import React, { Component } from "react";

import { View, Text, Image } from "react-native";

export default class Arin extends Component {
  render() {
    let pic = {
      uri:
        "http://www.etoland.co.kr/data/daumeditor02/190320/31066415530710960.gif",
    };
    return <Image source={pic} style={{ width: 300, height: 300 }} />;
  }
}
