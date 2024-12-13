import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function GoalItem(props) {
  return (
    <View style={styles.goalCard}>
      <Text style={styles.goalText}>{props.text}</Text>

      <Pressable
        android_ripple={{ color: "#red" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
      >
        <Ionicons name="trash-outline" size={24} color="white" />
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
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
