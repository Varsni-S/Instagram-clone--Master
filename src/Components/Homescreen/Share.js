import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';

const options = {
  title,
  url,
  message,
};
const [image, setImage] = React.useState('../../assests/users/tesla.png');
const share = async (customOptions = options) => {
  try {
    await Share.open(customOptions);
  } catch (err) {
    console.log(err);
  }
};

export default function Share() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: image,
        }}
        style={{...styles.containerImg, ...styles.stretchImg}}
      />
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share();
          }}
          title="Share Text"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing image file from awesome share app',
              message: 'Please take a look at this image',
              url: file.img,
            });
          }}
          title="Share Image"
        />
      </View>
      <View style={{marginVertical: 5}}>
        <Button
          onPress={async () => {
            await share({
              title: 'Sharing pdf file from awesome share app',
              message: 'Please take a look at this file',
              url: file.pdf,
            });
          }}
          title="Share pdf"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    paddingTop: 50,
    marginVertical: 20,
  },
  stretchImg: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
