import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
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

  function deleteGoalHandler(index) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goalIndex) => goalIndex.key !== index);
    });
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
              <View style={styles.goalCard}>
                <Text style={styles.goalText}>{item.item.text}</Text>
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="white"
                  onPress={() => {
                    deleteGoalHandler(item.item.key);
                  }}
                />
              </View>
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
  goalCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    marginBottom: 10,
  },
  goalText: {
    color: "white",
  },
});
