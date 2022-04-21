import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function story({imageUrl, profileName}) {
  return (
    <View style={style.box}>
      <View style={style.storyImageBox}>
        <Image style={style.storyImage} source={imageUrl} />
      </View>
      <Text style={style.storyName}>{profileName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    height: 120,
  },
  box: {
    paddingVertical: 5,
    height: '100%',
    width: 110,
    marginRight: -18,
    marginLeft: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImageBox: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',

    // width: '80%',
    // height: '75%',
  },
  storyImage: {
    // resizeMode: 'cover',
    // width: '92%',
    // height: '92%',
    // borderRadius: 100,
    // backgroundColor: 'orange',
    // padding: 10,
    borderRadius: 100 / 2,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  storyName: {
    textAlign: 'center',
    color: 'white',
    marginTop: 2,
    fontSize: 12,
  },
});
