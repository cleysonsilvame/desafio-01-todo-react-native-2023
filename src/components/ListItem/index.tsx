import { Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { Task } from "../../screens/Home";

interface ListItemProps {
  task: Task;
  onCheckChanged: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ListItem({ task, onCheckChanged, onDelete }: ListItemProps) {
  
  function handleCheckbox() {
    onCheckChanged(task.id);
  }
  
  function handleDelete() {
    onDelete(task.id);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheckbox}>
      <View style={styles.checkboxContainer}>
        {task.isDone ? (
          <View style={{ ...styles.checkbox, ...styles.checked }}>
            <Feather name="check" color="#F2F2F2" />
          </View>
        ) : (
          <View style={{ ...styles.checkbox, ...styles.unchecked }} />
        )}
        <Text style={task.isDone ? styles.textChecked : styles.text}>
          {task.title}
        </Text>
      </View>

      <TouchableOpacity style={styles.trashContainer} onPress={handleDelete}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
