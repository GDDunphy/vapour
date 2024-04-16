import { View, Text, Image } from "react-native";
import Input from "../components/Input.tsx";
import LoginButton from "../components/LoginButton.tsx";
import { useReducer, useState } from "react";
import auth from '@react-native-firebase/auth'

function inputCredentials(state: Object, action: Object) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

function Login() {

  const initialState = {
    username: '',
    password: ''
  }

  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();
  const [state, dispatch] = useReducer(inputCredentials, initialState);
  const { username, password } = state;

  async function handleLogin() {
    console.log("login clicked", state);
    try {
      let user = await auth().signInWithEmailAndPassword(state.username, state.password)
      console.log(user, ' user')
    }
    catch (e) {
      console.log(e, ' some error trying to log in')
    }
  }

  return (
    <View style={styles.background}>
      <Image
        source={require("../assets/logo_green.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Input
          label={'Username'}
          value={username}
          onChange={(text: String) => dispatch({ field: 'username', value: text })}
        />
      </View>
      <Input
        label={'Password'}
        value={password}
        onChange={(text: String) => dispatch({ field: 'password', value: text })}
      />
      <LoginButton
        onPress={handleLogin}
      />
    </View>

  );
}

const styles = {
  background: {
    backgroundColor: "#11464d",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    marginBottom: 10
  },
  logo: {
    height: 100,
    width: 190,
    marginBottom: 20
  }
};

export default Login;
