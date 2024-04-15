import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home.tsx";

import Login from "./app/screens/Login.tsx";

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
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name={"Login"}
          component={Login}
        />
        <Stack.Screen
          name={"Home"}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
