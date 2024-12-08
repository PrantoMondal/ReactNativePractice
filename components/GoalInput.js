import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course goal!"
        onChangeText={props.inputHandler}
      />
      <Button title="Add goal" onPress={props.onPress} />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    width: "70%",
  },
});
