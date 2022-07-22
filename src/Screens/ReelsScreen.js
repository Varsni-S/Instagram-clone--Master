import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import Reels from '../Components/Homescreen/Reels';
import {useNavigation} from '@react-navigation/native';

export default function ReelsScreen({imageUrl}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'black',
        width: windowWidth,
        height: windowHeight - 70,
      }}>
      {/* header */}
      <View
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          zIndex: 1,
          padding: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: -80,
          }}>
          {' '}
          Reels{' '}
        </Text>
        <FontAwesomeIcon
          onPress={() => {
            navigation.navigate('ReelsCamera');
          }}
          icon={faCamera}
          color="white"
          size={20}
          style={{marginLeft: 105, marginRight: -65}}
        />
      </View>
      {/* main reels */}
      <Reels />
    </View>
  );
}

const style = StyleSheet.create({
  profilePicImage: {
    // borderRadius: 100,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
