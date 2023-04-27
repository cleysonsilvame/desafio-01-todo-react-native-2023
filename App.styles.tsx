import { StyleSheet } from "react-native";
import { theme } from "./src/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base["gray-600"],
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
