import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

export default class FlatListBasics extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 52, wiidth: "100%" }}>
        <TouchableOpacity>
          <FlatList
            data={[
              { key: "영수" },
              { key: "철수" },
              { key: "유리" },
              { key: "짱구" },
              { key: "윤수" },
              { key: "현수" },
              { key: "재호" },
            ]}
            renderItem={({ item }) => {
              return (
                <Text
                  style={{
                    padding: 10,
                    fontSize: 18,
                    height: 44,
                    boarderWidth: 1,
                    width: "80%",
                  }}
                >
                  {item.key}
                </Text>
              );
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//     render() {
//         const data = [
//             {key: "영수"},
//             {key: "철수"},
//             {key: "유리"},
//             {key: "짱구"},
//             {key: "윤수"},
//             {key: "현수"},
//             {key: "재호"},
//         ];
//         return (
//             <View style = {{ marginTop: 20, }}>
//                 <FlatList data={data} renderItem {{ item }} => {
//                     return (<Text>{{item.key}}</Text>/>)
//             </View>
//         );
//     }
// }
