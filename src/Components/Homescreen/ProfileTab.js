import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ProfileTab() {
  console.log('hii');
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{color: 'white'}}>ProfileTab</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
