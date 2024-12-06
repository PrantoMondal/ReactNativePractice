import { useState } from "react";
import { TextInput, View, StyleSheet, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goalIndex) => goalIndex.key !== key);
    });
  }
  function addGoalHandler() {
    enteredGoalText != ""
      ? setCourseGoals((currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() },
        ])
      : null;
    console.log(courseGoals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            console.log(courseGoals.length);
            return (
              <GoalItem
                text={item.item.text}
                onPress={() => deleteGoalHandler(item.item.key)} // Pass as an anonymous function
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
  },
  // goalCard: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e0acc",
  //   marginBottom: 10,
  // },
  // goalText: {
  //   color: "white",
  // },
});
