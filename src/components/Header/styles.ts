import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.colors.base["gray-700"],
  },
  logo: {
    marginTop: 20,
    width: 110,
    resizeMode: "contain",
  },
});
