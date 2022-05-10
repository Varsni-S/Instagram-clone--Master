import React, {useRef} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Message() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput
        style={styles.textInputStyle}
        //   onChangeText={text => searchFilterFunction(text)}
        // value={search}
        underlineColorAndroid="transparent"
        placeholder="Search"
        placeholderTextColor="white"
      />
      <Button
        title="Chat screen"
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'grey',
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },
});
