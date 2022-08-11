import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";

function AddTask({ onPress }) {
  [task, setTask] = useState("");

    function onBtnPress() {
        onPress(task);
        setTask("");
    }

  return (
    <View style={styles.addView}>
      <TextInput
        placeholder="Add a task..."
        onChangeText={input => setTask(input)}
        defaultValue={task}
        style={styles.taskInput}
      ></TextInput>
      <TouchableOpacity
        onPress={onBtnPress}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  addView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  taskInput: {
    flex: 5,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#227add",
    color: "#227add",
    padding: 10,
    height: 40,
    width: "70%",
    marginRight: 15,
  },
  appButtonContainer: {
    flex: 1,
    elevation: 8,
    backgroundColor: "#227add",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
