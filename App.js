import { useState } from "react";
import GoalItem from "./Components/GoalItem";
import GoalText from "./Components/GoalText";
import { Button, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function ModalOpenHandler() {
    setIsVisible(true);
  }
  function ModalCloseHandler() {
    setIsVisible(false);
  }
  function goalInputHandler(enteredGoal) {
    setEnteredValue(enteredGoal); // Corrected function naming convention
  }

  function goalEnteredHandler() {
    setGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredValue, id: Math.random().toString() },
    ]);
    setEnteredValue(""); // Clear input after adding goal
    ModalCloseHandler();
  }
  function onDeleteHandler(id) {
    setGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.mainApp}>
        <Button title="Add A New Goal" onPress={ModalOpenHandler} />
        <View>
          <GoalText
            enteredValue={enteredValue}
            goalEnteredHandler={goalEnteredHandler}
            goalInputHandler={goalInputHandler}
            IsVisible={isVisible}
            closeModal={ModalCloseHandler}
          />
        </View>
        <View style={styles.listContainer}>
          <GoalItem goals={goals} onDeleteHandler={onDeleteHandler} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
    marginTop: 70,
    padding: 25,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    // Updated to camelCase
    flex: 4,
    marginTop: 40,
  },
});
