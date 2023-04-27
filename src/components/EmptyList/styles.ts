import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: theme.colors.base["gray-400"],
    borderTopWidth: 1,

    alignItems: "center",
  },
  image: {
    marginTop: 46,
    marginBottom: 16,
  },
  textBase: {
    color: theme.colors.base["gray-300"],
    fontSize: 16,
  },
});
