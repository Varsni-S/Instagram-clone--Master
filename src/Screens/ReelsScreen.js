import {View, Text} from 'react-native';
import React from 'react';
import Header from '../Components/Homescreen/header';

import {Dimensions} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import Reels from '../Components/Homescreen/Reels';

export default function ReelsScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        backgroundColor: 'black',
        width: windowWidth,
        height: windowHeight - 70,
        //position: 'relative',
      }}>
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
          icon={faCamera}
          color="white"
          size={20}
          style={{marginLeft: 105, marginRight: -65}}
        />
      </View>
      <Reels />
    </View>
  );
}
