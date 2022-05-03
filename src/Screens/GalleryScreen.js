import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
// import CameraRoll from '@react-native-community/cameraroll';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// async function hasAndroidPermission() {
//   const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

//   const hasPermission = await PermissionsAndroid.check(permission);
//   if (hasPermission) {
//     return true;
//   }

//   const status = await PermissionsAndroid.request(permission);
//   return status === 'granted';
// }

export default function GalleryScreen() {
  const navigation = useNavigation();
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
        <Text style={{color: 'white'}}>Picker Image</Text>
      </View>
      <ScrollView>
        <Text style={{color: 'white'}}>Gallery Image</Text>
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
