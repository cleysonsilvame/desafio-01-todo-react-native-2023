import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,

    color: theme.colors.base["gray-100"],
    fontSize: 16,

    backgroundColor: theme.colors.base["gray-500"],
    borderWidth: 1,
    borderRadius: 6,
  },
});
