import { StyleSheet, Text, View, FlatList } from "react-native";

function TaskLists({ tasks }) {
  return (
    <View style={styles.tasksListContainer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Text style={styles.taskListItem}>{item.text}</Text>
        )}
      />
    </View>
  );
}

export default TaskLists;

const styles = StyleSheet.create({
    tasksListContainer: {
        marginTop: 10,
        marginHorizontal: 30,
    },
  taskListItem: {
    padding: 10,
    fontSize: 16,
    height: 44,
    marginBottom: 5, 
    backgroundColor: "#227add",
    borderRadius: 8,
    color: "#fff"
  },
});
