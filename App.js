import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Courses from './src/screens/Courses';
import Students from './src/screens/Students';
import AboutUs from './src/screens/AboutUs';
import Contact from './src/screens/Contact';
import CourseDetails from './src/screens/CourseDetails';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <Home {...props} name="Express Learning" />}
        </Stack.Screen>
        <Stack.Screen name="Courses" options={{ headerTitleAlign: "center" }}>
          {props => <Courses {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Students" options={{ headerTitleAlign: "center" }}>
          {props => <Students {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AboutUs" options={{ headerTitleAlign: "center" }}>
          {props => <AboutUs {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" options={{ headerTitleAlign: "center" }}>
          {props => <Contact {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CourseDetails" options={{ headerTitleAlign: "center", title: "Course Details" }}>
          {props => <CourseDetails {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
