import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import Goalnput from "./components/Goalnput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log("TO BE RE-RENDER")
  console.log(courseGoal)
  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }
    // setCourseGoal([...courseGoal, enteredGoal]);
    console.log("sdfsdf", enteredGoal);
    setCourseGoal((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log("TO BE DELETED " + goalId);
    console.log(courseGoal)
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal " onPress={() => setIsAddMode(true)} />
      <Goalnput
        onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            // onDelete={removeGoalHandler.bind(this, itemData.item.uid)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
