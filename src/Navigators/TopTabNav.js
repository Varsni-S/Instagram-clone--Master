import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTab from '../Components/Homescreen/ProfileTab';
import TagsProfileTab from '../Components/Homescreen/TagsProfileTab';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
const Tab = createMaterialTopTabNavigator();
export default function TopTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{tabBarLabel: 'Profile'}}
      />
      <Tab.Screen
        name="TagsTab"
        component={TagsProfileTab}
        options={{tabBarLabel: 'Tags'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
