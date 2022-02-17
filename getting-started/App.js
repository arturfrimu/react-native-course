import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    setGoals((goals) => [...goals, enteredGoal]);
    setEnteredGoal("");
  };

  const clearGoals = () => {
    setGoals(() => []);
  };

  return (
    <View style={styles.screen}>
      <View>
        <TextInput
          placeholder="Input your goals here"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actionsSection}>
          <Button title={"Add"} onPress={() => addGoal()} />
          <Button title={"Clear"} onPress={() => clearGoals()} />
        </View>
      </View>
      <View>
        {goals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  textInput: { borderColor: "black", borderWidth: 1, padding: 10 },
  actionsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
