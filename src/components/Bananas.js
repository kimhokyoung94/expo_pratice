import React, { Component } from "react";

import { View, Text, Image } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "http://i2.tcafe2a.com/2008/20200822151658_cececa2d23d4e422a698225f196ad427_ko8x.gif",
    };
    return <Image source={pic} style={{ width: 300, height: 300 }} />;
  }
}
