import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  Permission,
} from 'react-native';
import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBolt,
  faCircle,
  faClock,
  faCog,
  faMusic,
  faRepeat,
  faThLarge,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';

export default function ReelsCamera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [front, setfront] = useState(false);
  const navigation = useNavigation();

  // const captureHandle = async () => {
  //   try {
  //     const data = await takePicture();
  //     console.log(data.uri, 'take reels pic');
  //     const filePath = data.uri;
  //     const newFilePath =
  //       RNFS.ExternalDirectoryPath + '/' + 'IMG' + Date.now() + '.jpg';
  //     RNFS.moveFile(filePath, newFilePath)
  //       .then(() => {
  //         console.log('Image Moved', filePath, '-- to --', newFilePath);
  //         navigation.navigate('ReelsScreen', {
  //           image1: {path: 'file:///' + newFilePath},
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const videoCapture = () => {
    ImagePicker.openCamera({
      mediaType: 'video',
    })
      .then(video => {
        navigation.navigate('ReelsScreen', {
          video: video,
        });
        console.log('jjio');
        // console.log(image);
      })
      .catch(error => {
        console.log(error, 'ttt');
      });
  };

  return (
    <View style={styles.container}>
      {front ? (
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
          style={styles.preview}>
          {/* header icon */}
          <View style={{flexDirection: 'row', marginBottom: 560, padding: 6}}>
            <TouchableOpacity style={{marginLeft: 15}}>
              <FontAwesomeIcon icon={faCog} size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{marginLeft: 310}}>
              <FontAwesomeIcon icon={faTimes} size={25} color="white" />
            </TouchableOpacity>
          </View>
          {/* side icon */}
          <View
            style={{
              flexDirection: 'column',
              marginTop: -300,
              marginLeft: 5,
            }}>
            <FontAwesomeIcon
              icon={faMusic}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faClock}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faThLarge}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faBolt}
              size={25}
              color="white"
              style={{margin: 8}}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 170}}>
            <TouchableOpacity
              style={styles.captureBtn}
              onPress={() => videoCapture()}>
              <FontAwesomeIcon icon={faCircle} size={45} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 60}}
              onPress={() => setfront(!front)}>
              <FontAwesomeIcon icon={faRepeat} size={35} color="white" />
            </TouchableOpacity>
          </View>
        </RNCamera>
      ) : (
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.preview}>
          {/* header icon */}
          <View style={{flexDirection: 'row', marginBottom: 560, padding: 6}}>
            <TouchableOpacity style={{marginLeft: 15}}>
              <FontAwesomeIcon icon={faCog} size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{marginLeft: 310}}>
              <FontAwesomeIcon icon={faTimes} size={25} color="white" />
            </TouchableOpacity>
          </View>
          {/* side icon */}
          <View
            style={{
              flexDirection: 'column',
              marginTop: -300,
              marginLeft: 5,
            }}>
            <FontAwesomeIcon
              icon={faMusic}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faClock}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faThLarge}
              size={25}
              color="white"
              style={{margin: 8}}
            />
            <FontAwesomeIcon
              icon={faBolt}
              size={25}
              color="white"
              style={{margin: 8}}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 170}}>
            <TouchableOpacity
              style={styles.captureBtn}
              onPress={() => videoCapture()}>
              <FontAwesomeIcon icon={faCircle} size={45} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginRight: 60}}
              onPress={() => setfront(true)}>
              <FontAwesomeIcon icon={faRepeat} size={35} color="white" />
            </TouchableOpacity>
          </View>
        </RNCamera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    //alignItems: 'center',
    //  justifyContent: 'flex-end',
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  captureBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 80,
  },
});
