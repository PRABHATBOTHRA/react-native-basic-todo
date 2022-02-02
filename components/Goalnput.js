import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const Goalnput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const onChangeData = (inputText) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={onChangeData} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancelGoal} />
          </View>
        </View>
        {/* <Button title="ADD" onPress={()=>props.onAddGoal(entredGoal)} /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default Goalnput;
