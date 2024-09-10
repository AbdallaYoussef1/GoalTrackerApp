import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalText = ({
  goalInputHandler,
  enteredValue,
  goalEnteredHandler,
  IsVisible,
  closeModal,
}) => {
  return (
    <Modal visible={IsVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
        <TextInput
          style={styles.textInput} // Corrected style name to be consistent with naming conventions
          placeholder="Add your goals here"
          onChangeText={goalInputHandler} // Corrected the prop name to `onChangeText`
          value={enteredValue} // Adding a controlled component for best practices
        />
        <View style={styles.allButtons}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={goalEnteredHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalText;

const styles = StyleSheet.create({
  textInput: {
    // Updated to camelCase
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    width: "100%",
    padding: 12,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#311b6b",
  },
  allButtons: {
    marginTop: 15,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 25,
  },
});
