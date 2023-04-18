import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { theme } from "../../theme";
import { styles } from "./styles";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  function handleCreateNewTask() {
    if (!task.trim()) return;

    const newTask = {
      id: uuid.v4() as string,
      title: task,
      isDone: false,
    };

    setTasks(state => [...state, newTask]);

    setTask("");
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Input
            value={task}
            onChangeText={value => setTask(value)}
            onSubmitEditing={handleCreateNewTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={theme.colors.base["gray-100"]}
            />
          </TouchableOpacity>
        </View>
        
        <View>
          {tasks.map(task => (
            <Text key={task.id} style={{ color: "white" }}>
              {JSON.stringify(task)}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
