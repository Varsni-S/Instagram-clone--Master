import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Dimensions,
  Button,
  Platform,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Swiper from 'react-native-swiper';
import CameraRoll from '@react-native-community/cameraroll';
import SearchContent from '../Components/Homescreen/SearchContent';

export default function GalleryScreen() {
  const [nodes, setNodes] = useState([]);
  const [detailViewVisible, setDetailViewVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    checkPermission().then(() => {
      getPhotos();
    });
  }, []);

  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    //console.log(hasPermission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Image gallery app permissions',
        message: 'Image gallery needs your permission to access your photos',
        buttonPositive: 'OK',
      },
    );
    return status === 'granted';
  };

  //getPhotos
  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 10,
    });
    console.log(photos, 'pic');
    setNodes(photos.edges.map(edge => edge.node));
    console.log(nodes, 'node');
  };

  const navigation = useNavigation();

  const showpic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image, 'img picked');
        navigation.navigate('ApplyFilter', {
          image1: image,
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

      {/* Pick Image */}
      <View>
        <Button
          title="Pick Image "
          style={{color: 'white'}}
          onPress={() => showpic()}
        />
      </View>

      {/* Image Gallery */}
      <ScrollView>
        <SearchContent />
      </ScrollView>

      {/* 
      <ScrollView> */}
      {/* {detailViewVisible ? (
          <Swiper loop={false} index={selectedIndex}>
            {nodes.map((node, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'red',
                  maxHeight: '100%',
                }}>
                <Image
                  style={{
                    width: '100%',
                    flex: 1,
                  }}
                  resizeMode="contain"
                  source={{
                    uri: node.image.uri,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 60,
                  }}>
                  <Button
                    title="Close"
                    onPress={() => {
                      setDetailViewVisibility(false);
                    }}
                  />
                </View>
              </View>
            ))}
          </Swiper>
        ) : ( */}
      {/* <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'grey',
          }}>
          {nodes.map((node, index) => (
            <View
              key={index}
              style={{
                height: 100,
                minWidth: 100,
                // flex: 1,
              }}
              onPress={() => {
                setDetailViewVisibility(true);
                setSelectedIndex(index);
              }}>
              <Image
                style={{
                  height: '70%',
                  minWidth: '70%',
                  flex: 1,
                }}
                source={{
                  uri: node.image.uri,
                }}
              />
            </View>
          ))}
        </View>
        {/* )} */}
      {/* </ScrollView> */}

      {/* footer */}
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
            CAMERA
          </Text>
        </View>
        <View style={styles.footerSection}>
          <Text
            style={styles.footerTitle}
            onPress={() => {
              navigation.navigate('VideoCapture');
            }}>
            VIDEOS
          </Text>
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
    //marginTop: 580,
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
