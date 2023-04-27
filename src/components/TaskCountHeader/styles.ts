import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textBase: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  created: {
    color: theme.colors.brand.blue,
  },
  done: {
    color: theme.colors.brand.purple,
  },
  counter: {
    backgroundColor: theme.colors.base["gray-400"],

    borderRadius: 9999,
    paddingHorizontal: 10,

    height: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 12,
    color: theme.colors.base["gray-200"],
    fontWeight: "bold",
  },
});
