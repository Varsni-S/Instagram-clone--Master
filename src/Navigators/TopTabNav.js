import {View, Text, color, ScrollView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function TopTabNav() {
  const Tab = createMaterialTopTabNavigator();

  let squares = [];
  let numberOfSquare = 7;

  for (let index = 0; index < numberOfSquare; index++) {
    squares.push(
      <View key={index}>
        <View
          style={{
            width: 130,
            height: 150,
            marginVertical: 0.5,
            backgroundColor: 'grey',
            opacity: 0.1,
          }}></View>
      </View>,
    );
  }
  //posts
  const Postss = () => {
    console.log('posts');
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Text style={{color: 'white'}}>Posts</Text>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };

  //video
  const Video = () => {
    console.log('Video');
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Text style={{color: 'white'}}>Video</Text>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  // tags
  const Tags = () => {
    console.log('tags');
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Text style={{color: 'white'}}>Tags</Text>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-between',
          }}>
          {squares}
        </View>
      </ScrollView>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'black'},
        height: 1.5,

        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Postss') {
            iconName = focused ? 'bars' : 'bars';
            colour = focused ? 'white' : 'gray';
          } else if (route.name === 'Video') {
            iconName = focused ? 'video' : 'video';
            colour = focused ? 'white' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'user' : 'user';
            colour = focused ? 'white' : 'gray';
          }

          return <FontAwesomeIcon icon={iconName} color={colour} size={22} />;
        },
      })}>
      <Tab.Screen
        name="Postss"
        component={Postss}
        options={{tabBarLabel: 'Post'}}
      />

      <Tab.Screen
        name="Video"
        component={Video}
        //  options={{tabBarLabel: 'Video'}}
      />
      <Tab.Screen
        name="Tags"
        component={Tags}
        // options={{tabBarLabel: 'Tags'}}
      />
    </Tab.Navigator>
  );
}
//  // screenOptions={{
//   tabBarActiveTintColor: 'white',
//   tabBarLabelStyle: {fontSize: 12},
//   tabBarStyle: {backgroundColor: 'black'},
//   height: 1.5,

// }}
