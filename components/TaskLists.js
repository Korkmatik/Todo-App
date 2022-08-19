import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

function TaskLists({ tasks, onPress }) {
  return (
    <View style={styles.tasksListContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Pressable onPress={() => onPress(item.key)}>
            <Text style={styles.taskListItem}>{item.text}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default TaskLists;

const styles = StyleSheet.create({
  tasksListContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 30,
    height: "100%"
  },
  taskListItem: {
    padding: 10,
    fontSize: 16,
    height: 44,
    marginBottom: 5,
    backgroundColor: "#227add",
    borderRadius: 8,
    color: "#fff",
  },
});
