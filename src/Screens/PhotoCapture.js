import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

import {NativeModules} from 'react-native';
const RNFetchBlob = NativeModules.RNFetchBlob;

export default function PhotoCapture() {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  //const [front, setFront] = useState;

  const navigation = useNavigation();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri, 'take pic');
      const filePath = data.uri;
      const newFilePath =
        RNFS.ExternalDirectoryPath + '/' + 'IMG' + Date.now() + '.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('Image Moved', filePath, '-- to --', newFilePath);
          navigation.navigate('NewPostScreen', {
            image1: {path: 'file:///' + newFilePath},
          });
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContanier}>
        <View style={styles.headerLeftWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            <FontAwesomeIcon icon={faTimes} color="white" size={22} />
          </TouchableOpacity>
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>CAMERA</Text>
          </View>
        </View>
      </View>

      {/* camera */}
      {}
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button
          title="Capture"
          color="#1eb900"
          onPress={() => captureHandle()}
        />
      </RNCamera>

      {/* footer */}
      <View style={styles.footerWrapper}>
        <View style={styles.footerSection}>
          <Text
            style={styles.footerTitle}
            onPress={() => {
              navigation.navigate('GalleryScreen');
            }}>
            GALLERY
          </Text>
        </View>
        <View style={styles.pickedFooterSection}>
          <Text
            style={styles.pickedFooterTitle}
            onPress={() => {
              navigation.navigate('PhotoCapture');
            }}>
            CAMERA
          </Text>
        </View>
        <TouchableOpacity
          style={styles.footerSection}
          onPress={() => {
            navigation.navigate('VideoCapture');
          }}>
          <Text style={styles.footerTitle}>VIDEOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  headerContanier: {
    display: 'flex',
    padding: 10,
  },
  previewWrapper: {
    display: 'flex',
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerTitleWrapper: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  footerSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  footerTitle: {
    fontSize: 16,
    color: 'grey',
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: 'white',
  },
});
