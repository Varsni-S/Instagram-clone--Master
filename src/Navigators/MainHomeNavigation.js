import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// For Warning : React-native-gesture-Handler (using an OLD Api)
import {LogBox} from 'react-native';
import NewPostScreen from '../Screens/NewPostScreen';
import MessagingScreen from '../Screens/MessagingScreen';
import HomeScreen from '../Screens/HomeScreen';
import Status from '../Components/Homescreen/status';
import ReelsScreen from '../Screens/ReelsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Comments from '../Components/Homescreen/Comments';
import TopTabNav from '../Navigators/TopTabNav';
import EditProfileScreen from '../Screens/EditProfileScreen';
import FriendProfile from '../Screens/FriendProfile';
import GalleryScreen from '../Screens/GalleryScreen';
import SearchFeed from '../Screens/SearchFeed';
import PhotoCapture from '../Screens/PhotoCapture';
import VideoCapture from '../Screens/VideoCapture';
import ApplyFilter from '../Screens/ApplyFilter';
import EditImage from '../Screens/EditImage';
import Demo from '../Screens/Demo';
import ImageAdjust from '../Screens/ImageAdjust';
import ChatScreen from '../Screens/ChatScreen';
import ImageWarm from '../Screens/ImageWarm';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faVideoCamera} from '@fortawesome/free-solid-svg-icons';
import Followers from '../Screens/Followers';
import Following from '../Screens/Following';
import FollowersTab from './FollowersTab';
import ReelsCamera from '../Screens/ReelsCamera';
import Setting from '../Screens/Setting';
import SavedItems from '../Screens/SavedItems';

import NewReelsScreen from '../Screens/NewReelsScreen';

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
          component={MessagingScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'Message',
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <FontAwesomeIcon icon={faVideoCamera} size={22} color="white" />
                <FontAwesomeIcon
                  icon={faPlus}
                  size={22}
                  color="white"
                  style={{marginLeft: 20, marginRight: 20}}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopTab"
          component={TopTabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPostScreen"
          component={NewPostScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'New Post',
          }}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReelsScreen"
          component={ReelsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={TopTabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FriendProfile"
          component={FriendProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GalleryScreen"
          component={GalleryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhotoCapture"
          component={PhotoCapture}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoCapture"
          component={VideoCapture}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({route}) => ({
            title: route.params.userName,
            // headerStyle: {backgroundColor: 'black'},
            // headerTitleStyle: {color: 'white'},
          })}
        />
        <Stack.Screen
          name="ApplyFilter"
          component={ApplyFilter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditImage"
          component={EditImage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchFeed"
          component={SearchFeed}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'Search',
          }}
        />
        <Stack.Screen
          name="Demo"
          component={Demo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImageAdjust"
          component={ImageAdjust}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImageWarm"
          component={ImageWarm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReelsCamera"
          component={ReelsCamera}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="
          NewReels"
          component={NewReels}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="NewReelsScreen"
          component={NewReelsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitle: 'Setting',
          }}
        />
        <Stack.Screen
          name="SavedItems"
          component={SavedItems}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Followers"
          component={FollowersTab}
          options={({route}) => ({
            title: 'Varsni_11',
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: 'white'},
          })}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="Following"
          component={FollowersTab}
          //options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
