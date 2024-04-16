import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/screens/Home.tsx';
import Login from './app/screens/Login.tsx';
import auth from '@react-native-firebase/auth';

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === "dark";
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black
//           }
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark
//           }
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    console.log('auth state changed running', user)
    setUser(user);
    if (initializing) {setInitializing(false);}
  }

  useEffect(() => {
    console.log('use effect running')
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={'Login'}
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={'Home'}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


}

export default App;
