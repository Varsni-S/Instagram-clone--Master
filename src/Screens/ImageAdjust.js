import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {faCaretDown, faTimes} from '@fortawesome/free-solid-svg-icons';
import RNViewShot from 'react-native-view-shot';
import Slider from 'react-native-slider';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  Contrast,
  Saturate,
  Brightness,
  Temperature,
} from 'react-native-color-matrix-image-filters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ImageAdjust({route}) {
  const navigation = useNavigation();
  //image path
  const productId = route.params.image1?.path;
  console.log(route.params.image1, 'adjust');

  const [brightvalue, setBrightValue] = useState(0.5);
  const [contrastvalue, setContrastValue] = useState(0.5);
  const [saturatvalue, setSaturatValue] = useState(0.5);
  const [type, setType] = useState();

  const imgref = useRef();
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
              Adjust{' '}
              <FontAwesomeIcon icon={faCaretDown} color="white" size={20} />
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.headerSubTitle}>Save</Text>
          </View>
        </View>
      </View>

      {/* Main Image */}

      <View style={styles.mainImageWrapper}>
        {type === 'brightness' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Brightness amount={brightvalue}>
              <Image
                style={styles.mainImage}
                source={{
                  uri: productId,
                }}
                resizeMode={'contain'}
              />
            </Brightness>
          </RNViewShot>
        ) : type === 'contrast' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Contrast amount={contrastvalue}>
              <Image
                style={styles.mainImage}
                source={{
                  uri: productId,
                }}
                resizeMode={'contain'}
              />
            </Contrast>
          </RNViewShot>
        ) : type === 'saturation' ? (
          <RNViewShot ref={imgref} options={{format: 'jpg', quality: 1}}>
            <Saturate amount={saturatvalue}>
              <Image
                style={styles.mainImage}
                source={{
                  uri: productId,
                }}
                resizeMode={'contain'}
              />
            </Saturate>
          </RNViewShot>
        ) : (
          <Image
            style={styles.mainImage}
            source={{
              uri: productId,
            }}
            resizeMode={'contain'}
          />
        )}
      </View>

      {/* Slider Adjust */}

      {/* brightness */}

      <View style={styles.sliderMain}>
        <Text style={styles.sliderText}> Brightness</Text>
        <Slider
          style={{width: '80%', height: 40}}
          value={brightvalue}
          onValueChange={value => (
            setType('brightness'), setBrightValue(value)
          )}
        />
      </View>

      <View style={styles.sliderMain}>
        <Text style={styles.sliderText}> Contrast</Text>
        <Slider
          style={{width: '80%', height: 40}}
          value={contrastvalue}
          onValueChange={value => (
            setType('contrast'), setContrastValue(value)
          )}
        />
      </View>

      <View style={styles.sliderMain}>
        <Text style={styles.sliderText}> Saturation</Text>
        <Slider
          style={{width: '80%', height: 40}}
          value={saturatvalue}
          onValueChange={value => (
            setType('saturation'), setSaturatValue(value)
          )}
        />
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
  mainImageWrapper: {
    display: 'flex',
  },
  mainImage: {
    width: width,
    height: 430,
  },
  sliderText: {
    color: 'white',
  },
  sliderMain: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    margin: 5,
  },
});
