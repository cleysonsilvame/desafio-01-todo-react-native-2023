import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { theme } from "../../theme";
import { TaskCountHeader } from "../../components/TaskCountHeader";
import { EmptyList } from "../../components/EmptyList";
import { ListItem } from "../../components/ListItem";

import { styles } from "./styles";

const KEY_STORAGE = "@todo-app:tasks";

const getTasksFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY_STORAGE);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch {}

  return [];
};

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState("");

  function handleCreateNewTask() {
    if (!inputTask.trim()) return;

    const newTask = {
      id: uuid.v4() as string,
      title: inputTask,
      isDone: false,
    };

    setTasks(state => [newTask, ...state]);

    setInputTask("");
  }

  function handleUpdateTask(id: string) {
    setTasks(state =>
      state.map(task => {
        if (task.id === id) return { ...task, isDone: !task.isDone };

        return task;
      })
    );
  }

  function handleDeleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  // const doneCount = tasks.filter(task => task.isDone).length; Segunda forma de realizar a contagem
  const doneCount = tasks.reduce((count, task) => {
    if (task.isDone) count++;

    return count;
  }, 0);

  useEffect(() => {
    if (tasks.length) {
      const rawTasks = JSON.stringify(tasks);
      AsyncStorage.setItem(KEY_STORAGE, rawTasks);
    }
  }, [tasks]);

  useEffect(() => {
    getTasksFromStorage().then(setTasks);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Input
              value={inputTask}
              onChangeText={value => setInputTask(value)}
              onSubmitEditing={handleCreateNewTask}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleCreateNewTask}
            >
              <AntDesign
                name="pluscircleo"
                size={24}
                color={theme.colors.base["gray-100"]}
              />
            </TouchableOpacity>
          </View>

          <TaskCountHeader createdCount={tasks.length} doneCount={doneCount} />

          <View style={styles.listContainer}>
            <FlatList
              data={tasks}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item }) => (
                <ListItem
                  task={item}
                  onCheckChanged={handleUpdateTask}
                  onDelete={handleDeleteTask}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              ListEmptyComponent={<EmptyList />}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
