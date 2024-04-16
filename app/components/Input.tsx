import { TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles.tsx";

// todo
//  label

function Input({ label, value, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = {
  input: {
    backgroundColor: globalStyles.backgroundGrey,
    fontFamily: "Asap-Bold",
    height: 40,
    width: 240,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  }
};

export default Input;
