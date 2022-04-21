import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Components/Homescreen/header';
export default function NotificationScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header heading="Notification" />
    </View>
  );
}
