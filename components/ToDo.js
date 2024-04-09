import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";

export default function Todo({ id, text, isCompleted, isToday, hour }) {
  return (
    <View style={styles.container}>
      <Checkbox
        id={id}
        text={text}
        hour={hour}
        isCompleted={isCompleted}
        isToday={isToday}
      />
      <View>
        <Text
          style={
            isCompleted
              ? [
                styles.text,
                { textDecorationLine: "line-through", color: "#73737330" },
              ]
              : styles.text
          }
        >
          {text}
        </Text>
        <Text
          style={
            isCompleted
              ? [
                styles.hour,
                { textDecorationLine: "line-through", color: "#73737330" },
              ]
              : styles.hour
          }
        >
          {hour}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
  time: {
    fontSize: 13,
    color: "#a3a3a3",
    fontWeight: "500",
  },
});
