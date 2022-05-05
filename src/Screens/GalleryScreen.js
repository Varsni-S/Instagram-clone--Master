import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Dimensions,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

// import CameraRoll from '@react-native-community/cameraroll';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// const [images, setImages] = useState();
// const [albums, setAlbums] = useState();
// const [pickedImage, setPickedImage] = useState();
// const [category, setCategory] = useState();
// const [imgArr, setimgArr] = useState();

// async function hasAndroidPermission() {
//   const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

//   const hasPermission = await PermissionsAndroid.check(permission);
//   if (hasPermission) {
//     return true;
//   }

//   const status = await PermissionsAndroid.request(permission);
//   return status === 'granted';
// }

// useEffect(() => {
//   if (Platform.OS === 'android' && !hasAndroidPermission()) {
//     return;
//   }

//   let params = {assetType: 'All'};
//   CameraRoll.getAlbums(params)
//     .then(images => {
//       setImages(images);
//       console.log(images);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });

// const displayImages = () => {
//   return images.map((item, key) => {
//     return (
//       <View>
//         <Text style={{color: 'white'}}>{key}</Text>
//       </View>
//     );
//   });
// };

export default function GalleryScreen() {
  const navigation = useNavigation();

  const showpic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image, 'img');
        navigation.navigate('NewPostScreen', {
          image1: image,
        });
      })
      .catch(err => console.log(err, 'error'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faTimes} color="white" size={22} />
          </TouchableOpacity>
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>
              Gallery{' '}
              <FontAwesomeIcon icon={faCaretDown} color="white" size={20} />
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.headerSubTitle}>Next</Text>
          </View>
        </View>
      </View>
      <View>
        <Button
          title="pick image"
          style={{color: 'white'}}
          onPress={() => showpic()}
        />
        {/* Picker Image
        </Text> */}
      </View>
      <ScrollView>
        {/* <Text style={{color: 'white'}}>{displayImages()}</Text> */}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>GALLERY</Text>
        </View>
        <View style={styles.footerSection}>
          <Text
            style={styles.footerTitle}
            onPress={() => {
              navigation.navigate('PhotoCapture');
            }}>
            PHOTOS
          </Text>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>VIDEOS</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
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
  headerSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginRight: 10,
  },
});
