import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";

const GoalItem = ({ onDeleteHandler, goals }) => {
  return (
    <FlatList
      data={goals}
      renderItem={(item) => {
        return (
          <Pressable
            onPress={() => {
              onDeleteHandler(item.item.id);
            }}
          >
            <View style={styles.goalView}>
              <Text style={styles.goalTxt}>{item.item.text}</Text>
            </View>
          </Pressable>
        );
      }}
      keyExtractor={(item) => item.id}
      alwaysBounceVertical={false}
    ></FlatList>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalView: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#e4d0ff",
  },
  goalTxt: {
    color: "#rgb(95, 52, 224)",
  },
});
