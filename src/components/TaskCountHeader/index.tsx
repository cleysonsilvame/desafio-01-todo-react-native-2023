import { Text, View } from "react-native";

import { styles } from "./styles";

interface TaskCountHeaderProps {
  createdCount: number;
  doneCount: number;
}

export function TaskCountHeader({
  createdCount,
  doneCount,
}: TaskCountHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={{ ...styles.textBase, ...styles.created }}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{createdCount}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Text style={{ ...styles.textBase, ...styles.done }}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{doneCount}</Text>
        </View>
      </View>
    </View>
  );
}
