import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface Input extends TextInputProps {}

export function Input(props: Input) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const borderColor = isHighlighted
    ? theme.colors.brand["purple-dark"]
    : theme.colors.base["gray-700"];

  return (
    <TextInput
      style={{ ...styles.input, borderColor }}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={theme.colors.base["gray-300"]}
      selectionColor={theme.colors.brand["blue-dark"]}
      onFocus={() => setIsHighlighted(true)}
      onBlur={() => setIsHighlighted(false)}
      {...props}
    />
  );
}
