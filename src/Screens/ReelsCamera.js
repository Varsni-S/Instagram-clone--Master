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
  //         navigation.navigate('NewReelsScreen', {
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
        navigation.navigate('NewReelsScreen', {
          video: video,
        });
      })
      .catch(error => {
        console.log(error, 'ttt');
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Capture reels" onPress={() => videoCapture()} />
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
