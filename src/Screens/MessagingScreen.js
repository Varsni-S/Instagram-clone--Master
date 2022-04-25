import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import Header from '../Components/Homescreen/header';

export default function Example() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header heading="Messaging" icon2="comment-dots" />
      <Text>Varsni</Text>
    </View>
  );
}
