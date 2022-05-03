import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

export default function PhotoCapture() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContanier}>
        <View style={styles.headerLeftWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faTimes} color="white" size={22} />
          </TouchableOpacity>
          <View style={styles.headerTitleWrapper}>
            <Text style={styles.headerTitle}>
              PHOTOS
              <FontAwesomeIcon icon={faCaretDown} color="white" size={20} />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.previewWrapper}>
        <Text style={{color: 'white'}}> Image Picker</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Text style={{color: 'white'}}> Button Picker</Text>
      </View>
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
          <Text style={styles.pickedFooterTitle}>PHOTOS</Text>
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
