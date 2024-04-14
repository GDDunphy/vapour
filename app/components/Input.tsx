import { TextInput } from 'react-native';
import { useState } from 'react';
import { globalStyles } from "../styles/globalStyles.tsx";

// todo
//  label

function Input({ label }) {
  const [value, setValue] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder={label}
      value={value}
      onChangeText={setValue}
    />
  );
}

const styles = {
  input: {
    backgroundColor: globalStyles.backgroundGrey,
    height: 40,
    width: 240,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6
  }
};

export default Input;
