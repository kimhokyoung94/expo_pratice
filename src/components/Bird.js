import React, { Component } from "react";

import { View, Text, Image } from "react-native";

export default class Bird extends Component {
  render() {
    let pic = {
      uri:
        "https://1.bp.blogspot.com/-MU2kXC_JDZQ/XzvbX605BNI/AAAAAAAAMMs/F70HFFaWOsAmbDZK9zsfW6mukTwNQ65ywCLcBGAsYHQ/d/Umjjal_kr_007.gif",
    };
    return <Image source={pic} style={{ width: 500, height: 500 }} />;
  }
}
