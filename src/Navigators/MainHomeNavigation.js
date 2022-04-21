import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// For Warning : React-native-gesture-Handler (using an OLD Api)
import {LogBox} from 'react-native';
import NewContentScreen from '../Screens/NewContentScreen';
import MessagingScreen from '../Screens/MessagingScreen';
import HomeScreen from '../Screens/HomeScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
function DrawerFunction() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="hello" component={MessagingScreen} />
      <Drawer.Screen name="hllo" component={HomeScreen} />
      <Drawer.Screen name="ello" component={MessagingScreen} />
    </Drawer.Navigator>
  );
}
export default function MyStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MessagingScreen"
          component={DrawerFunction}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NewContentScreen" component={NewContentScreen} />
      </Stack.Navigator>
    </>
  );
}
