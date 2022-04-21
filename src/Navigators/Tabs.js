import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../Screens/SearchScreen';
import ReelsScreen from '../Screens/ReelsScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
const Tab = createBottomTabNavigator();
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import '../FontAwesomeLibrary';

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 30 : 20;
            color = focused ? 'white' : 'white';
          } else if (route.name === 'Search') {
            iconName = 'search';
            size = focused ? 30 : 20;
            color = 'white';
          } else if (route.name === 'Reels') {
            iconName = 'dove';
            size = focused ? 30 : 20;
            color = focused ? 'white' : 'white';
          } else if (route.name === 'Notification') {
            iconName = 'heart';
            size = focused ? 30 : 20;
            color = 'white';
          } else if (route.name === 'Profile') {
            iconName = 'user';
            size = focused ? 30 : 20;
            color = focused ? 'white' : '#C1A3A3';
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        headerShown: false,
        initialRouteName: 'Home',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
