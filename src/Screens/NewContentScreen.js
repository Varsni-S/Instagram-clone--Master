import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function NewContentScreen({route}) {
  const productId = route.params.image1?.path;
  console.log(route.params.image1, 'newPost');
  console.log(productId);
  console.log('file://' + productId);
  return (
    <View>
      <Image
        style={styles.filterSelector}
        source={{
          uri: productId,
        }}
        resizeMode={'contain'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  filterSelector: {
    width: '100%',
    height: '100%',

    backgroundColor: 'black',
  },
});
