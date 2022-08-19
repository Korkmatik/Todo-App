import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import AddTask from "./components/AddTask";
import TaskLists from "./components/TaskLists";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function onPressAddTask(taskToAdd) {
    let id = Math.random();
    let task = {
      "text": taskToAdd,
      "key": id
    }

    setTasks([...tasks, task])
  }

  function deleteTask(key) {
    let newTasks = tasks.filter(task => task.key != key);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <AddTask onPress={onPressAddTask} />

      <TaskLists tasks={tasks} onPress={deleteTask} />

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
