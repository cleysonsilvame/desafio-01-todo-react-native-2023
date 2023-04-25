import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    paddingLeft: 18,
    backgroundColor: theme.colors.base["gray-500"],
    borderColor: theme.colors.base["gray-400"],
    borderWidth: 1,
    borderRadius: 8,

    flexDirection: "row",
    gap: 10,
  },
  checkboxContainer: {
    flex: 1,

    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  checkbox: {
    borderRadius: 9999,
    borderWidth: 2,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  unchecked: {
    borderColor: theme.colors.brand.blue,
  },
  checked: {
    borderColor: theme.colors.brand["purple-dark"],
    backgroundColor: theme.colors.brand["purple-dark"],
  },
  text: {
    flex: 1,
    color: theme.colors.base["gray-100"],
  },
  textChecked: {
    flex: 1,

    color: theme.colors.base["gray-300"],
    textDecorationLine: "line-through",
  },
  trashContainer: {
    justifyContent: "center",
    padding: 12,
  },
});
