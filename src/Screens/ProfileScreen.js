import {View, Text, Button} from 'react-native';
import React from 'react';
import Header from '../Components/Homescreen/header';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProfileScreen() {
  const signOut = () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header heading="Profile" icon1="plus-square" icon2="bars" />

      <ScrollView></ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 120,
        }}>
        <Button title="Log Out" onPress={signOut} />
      </View>
    </View>
  );
}
