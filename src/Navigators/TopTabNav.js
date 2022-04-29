// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// //import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ProfileTab from '../Components/Homescreen/ProfileTab';
// import TagsProfileTab from '../Components/Homescreen/TagsProfileTab';
// import HomeScreen from '../Screens/HomeScreen';
// import SearchScreen from '../Screens/SearchScreen';
// const Tab = createMaterialTopTabNavigator();
// export default function TopTabNav() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarLabelStyle: {fontSize: 12},
//         tabBarStyle: {backgroundColor: 'black'},
//       }}>
//       <Tab.Screen
//         name="ProfileTab"
//         component={ProfileTab}
//         options={{tabBarLabel: 'Profile'}}
//       />
//       <Tab.Screen
//         name="TagsTab"
//         component={TagsProfileTab}
//         options={{tabBarLabel: 'Tags'}}
//       />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({});

import {View, Text, color} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function TopTabNav() {
  const Tab = createMaterialTopTabNavigator();
  const Postss = () => {
    return (
      <View>
        <Text style={{color: 'white'}}>Posts</Text>
      </View>
    );
  };

  const Video = () => {
    return (
      <View>
        <Text style={{color: 'white'}}>Video</Text>
      </View>
    );
  };

  const Tags = () => {
    return (
      <View>
        <Text style={{color: 'white'}}>Tags</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Postss} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
}
