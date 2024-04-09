import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
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
