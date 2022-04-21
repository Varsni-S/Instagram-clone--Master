import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default function SearchScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput
        style={styles.textInputStyle}
        // onChangeText={text => searchFilterFunction(text)}
        // value={search}
        underlineColorAndroid="transparent"
        placeholder="Search"
        placeholderTextColor="white"
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
  },
});
