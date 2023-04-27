import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  inputContainer: {
    marginTop: -30,

    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 4,
  },

  input: {
    flex: 1,
    padding: 16,

    color: theme.colors.base["gray-100"],
    fontSize: 16,

    backgroundColor: theme.colors.base["gray-500"],
    borderColor: theme.colors.base["gray-700"],
    borderWidth: 1,
    borderRadius: 6,
  },

  button: {
    backgroundColor: theme.colors.brand["blue-dark"],
    borderRadius: 6,
    padding: 16,
  },
  listContainer: {
    flex: 1,
    marginVertical: 20,
  },
});
