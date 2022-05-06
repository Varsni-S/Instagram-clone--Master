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

export default function VideoCapture() {
  const navigation = useNavigation();

  // pick video
  const showVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then(video => {
        navigation.navigate('NewPostScreen', {
          video: video,
        });
      })

      .catch(err => console.log(err, 'error'));
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            <FontAwesomeIcon icon={faTimes} color="white" size={22} />
          </TouchableOpacity>
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>
              Videos{' '}
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

      {/* Picker Video */}
      <View>
        <Button
          style={{color: 'white'}}
          title="video"
          onPress={() => showVideo()}
        />
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerSection}>
          <Text
            style={styles.footerTitle}
            onPress={() => {
              navigation.navigate('GalleryScreen');
            }}>
            GALLERY
          </Text>
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
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>VIDEOS</Text>
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
    marginTop: 580,
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
