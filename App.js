import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import AddTask from "./components/AddTask";

export default function App() {
  function onPressAddTask(taskToAdd) {
    console.log(taskToAdd);
  }

  return (
    <View style={styles.container}>
      <AddTask onPress={onPressAddTask} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 60,
  },
});
