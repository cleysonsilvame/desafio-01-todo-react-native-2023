import { Image, Text, View } from "react-native";

import EmptyImage from "../../../assets/clipboard.png";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={EmptyImage} style={styles.image} />
      <Text style={{ ...styles.textBase, fontWeight: "bold" }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textBase}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
