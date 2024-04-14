import { View, Text, Image } from "react-native";
import Input from '../components/Input.tsx'

// todo
//  background colour
//  login button
//  password and username input
//


function Login() {
  return (
    <View style={styles.background}>
      <Image
      source={require('../assets/logo_green.png')}
      style={styles.logo}
      />
      <View style={styles.inputContainer}>
      <Input
        label={'Username'}
      />
      </View>
      <Input
        label={'Password'}
      />
    </View>

  );
}

const styles = {
  background: {
    backgroundColor: '#11464d',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 10,
  },
  logo: {
    height: 100,
    width: 190,
    marginBottom: 20,
  }
}

export default Login;
