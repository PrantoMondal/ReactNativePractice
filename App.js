import { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goalIndex) => goalIndex.key !== key);
    });
  }
  function addGoalHandler(enteredGoalText) {
    enteredGoalText != ""
      ? setCourseGoals((currentCourseGoals) => [
          ...currentCourseGoals,
          { text: enteredGoalText, key: Math.random().toString() },
        ])
      : null;
    endAddGoalHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              console.log(courseGoals.length);
              return (
                <GoalItem
                  text={item.item.text}
                  onDeleteGoal={() => deleteGoalHandler(item.item.key)}
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
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
