import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-paper";
import { fetch } from "whatwg-fetch";

function useRandomNumber() {
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    fetch("http://localhost:3000/api/randomNumber")
      .then(async (response) => await response.text())
      .then((text) => setNumber(+text));
  }, []);

  return number;
}

export const Index: FC = () => {
  const number = useRandomNumber();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js</Text>
      <Text>Random Number: {number}</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
};

export default Index;

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
