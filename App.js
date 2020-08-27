import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//react-native 컴포넌트 import

import HelloWorld from "./src/components/HelloWorld";
import Bananas from "./src/components/Bananas";
import Cat from "./src/components/Cat";
import Arin from "./src/components/Arin";
import Bird from "./src/components/Bird";
import Greeting from "./src/components/Greeting";
import GreetingGroup from "./src/components/GreetingGroup";
import Blink from "./src/components/Blink";
import StyleApp from "./src/components/StyleApp";
import SizeTest from "./src/components/SizeTest";
import BaseTextInput from "./src/components/BaseTextInput";
import ButtonGroup from "./src/components/ButtonGroup";
import FlatListProPs from "./src/components/FlatListProPs";
import Tellserch from "./src/components/FlatListProPs";

//componont import

export default function App() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {/* <View style={{ flex: 1, backgroundColor: "red" }} />
      <Text style={{ color: "white" }}>Welcome to the heaven</Text>
      <Bird></Bird>
      <GreetingGroup
        nameList={["개미는", "오늘도", "열심히", "일을 하네"]}
      ></GreetingGroup>

      <View style={{ flex: 2, backgroundColor: "white" }}>
        <Text style={{ color: "blue", fontSize: 50, fontStyle: "italic" }}>
          개미는 뚠뚠
        </Text>
        <Bananas></Bananas>
        <BaseTextInput></BaseTextInput>
        <ButtonGroup></ButtonGroup>
      </View>

      <View style={{ flex: 3, backgroundColor: "white" }}>
        <HelloWorld></HelloWorld>
        <Cat></Cat>
        <HelloWorld></HelloWorld>
        <Arin></Arin>
        <StatusBar style="auto" />
        <Blink innerText="깜빡입니다."> </Blink>
        <StyleApp></StyleApp>
        <SizeTest></SizeTest> */}
      {/* <FlatListProPs></FlatListProPs> */}
      <Tellserch></Tellserch>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#884",
    alignItems: "center",
    justifyContent: "center",
  },
});
