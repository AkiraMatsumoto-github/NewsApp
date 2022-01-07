import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        title="asdfghjkjhagfcjhsandcfhvgqawsedrftgyhujikytaqwsedrftgyhujesedrftgqawsedrftgyhujikokjuhyteaqwsedrftgyhujikojuhygtfrdeswaqwsedrftgyhujikoijuhygtfrdeswaqwsedrftgyhujikijuhygtfrdeswaqwsedrftgyhuji"
        imageUrl="https://picsum.photos/id/10/200/200"
        author="SampleNews"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
