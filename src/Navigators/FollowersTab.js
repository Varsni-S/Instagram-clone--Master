import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Followers from '../Screens/Followers';
import Following from '../Screens/Following';

export default function FollowersTab() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'black'},
        height: 1.5,
      })}>
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{tabBarLabel: 'Followers'}}
      />

      <Tab.Screen
        name="Video"
        component={Following}
        options={{tabBarLabel: 'Following'}}
      />
    </Tab.Navigator>
  );
}
