import {View, Text, Button} from 'react-native';
import React from 'react';
import Header from '../Components/Homescreen/header';
import auth from '@react-native-firebase/auth';

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
      <Header heading="User Profile" icon1="plus-square" icon2="bars" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Button title="Log Out" onPress={signOut} />
      </View>
    </View>
  );
}
