import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-paper";
import { fetch } from "whatwg-fetch";
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

export const StyledComponentExample = () => (
  <StyledView>
    <StyledText>Hello World!</StyledText>
  </StyledView>
)

export const PaperComponentExample = () => (
  <Button
    icon="camera"
    mode="contained"
    onPress={() => console.log("Pressed")}
  >
    Press me
  </Button>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});


function useRandomNumber() {
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    fetch("http://localhost:3000/api/randomNumber")
      .then(async (response) => await response.text())
      .then((text) => setNumber(+text));
  }, []);

  return number;
}

export const HookFetchExample = () => {
  const number = useRandomNumber();
  return (
    <Text>Random Number: {number}</Text>
  )
}

export const Index: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js</Text>
      <HookFetchExample/>
      <PaperComponentExample/>
      <StyledComponentExample/>
    </View>
  );
};

export default Index;
