import React, { component, Component } from "react";

import { View, Image } from "react-native";
import { ImATeapot } from "http-errors";

// export default class Cat extends Component {
//   render() {
//     let ImageSource = {
//       uri:
//         "https://img.etoday.co.kr/pto_db/2020/06/600/20200624174709_1476609_465_587.jpg",
//     };
//     return (
//       <View>
//         <Image source={ImageSource} style={{ width: 500, height: 500 }} />
//       </View>
//     );
//   }
// }

export default function Cat(props) {
  const ImageSource = {
    uri:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTAyMTlfMjgx/MDAxNTUwNTM5MjU1MTU1.xlk78XIcKIVhhWblZg4OaAZiJmjAyiGhhsUSozd9Uxgg.OeCek_5OBKdQX6cGMBSjxKHDPwtxF-PCqEti4l3fD4sg.GIF.liov158/%EC%8B%A0%EC%98%88%EC%9D%809.gif?type=w800",
  };
  const { width, height } = props;
  return (
    <View>
      <Image
        source={ImageSource}
        style={{ width: width || 300, height: height || 300 }}
      />
    </View>
  );
}
