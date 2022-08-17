import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import AddTask from "./components/AddTask";
import TaskLists from "./components/TaskLists";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function onPressAddTask(taskToAdd) {
    console.log(taskToAdd);
    let id = Math.random();
    let task = {
      "text": taskToAdd,
      "key": id
    }

    setTasks([...tasks, task])
  }

  return (
    <View style={styles.container}>
      <AddTask onPress={onPressAddTask} />

      <TaskLists tasks={tasks} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  }
});
