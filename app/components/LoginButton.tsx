import { View, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles.tsx";
import Icon from "./Icon.tsx";
import { PropsWithChildren } from "react";

type LoginProps = {
  onPress: Function
}

function LoginButton({ onPress }: LoginProps) {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Icon
        color={"white"}
        icon={"fa-arrow-right"} />
    </TouchableOpacity>
  );
}

export default LoginButton;

const styles = {
  button: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 60,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: globalStyles.highlightBlue,
    fontFamily: "Asap-Regular",
    margin: 10
  }
};
