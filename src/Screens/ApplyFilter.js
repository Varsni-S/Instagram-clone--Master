import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faSun} from '@fortawesome/free-solid-svg-icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  Brightness,
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
  Saturate,
} from 'react-native-color-matrix-image-filters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ApplyFilter({route}) {
  const productId = route.params.image1?.path;

  const navigation = useNavigation();

  const [effect, setEffect] = useState('');

  const imgref = useRef();

  const saveImg = image => {
    console.log('filter added ');
    navigation.navigate('NewPostScreen', {image1: image});
    // imgref.current.capture().then(uri => {

    // });
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.heaerWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
        </TouchableOpacity>

        <FontAwesomeIcon
          icon={faSun}
          size={20}
          color="white"
          style={{marginLeft: 150}}
        />
        <TouchableOpacity
          onPress={() => {
            saveImg();
          }}>
          {/* onPress={image => {
            navigation.navigate('NewPostScreen', {image1: image});
          }} */}
          <Text style={styles.headerSubTitle}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <View style={styles.mainImageWrapper}>
        {effect === 'grayscale' ? (
          <Grayscale>
            <Image
              style={styles.mainImage}
              source={{
                uri: productId,
              }}
              resizeMode={'contain'}
            />
          </Grayscale>
        ) : effect === 'sepia' ? (
          <Sepia>
            <Image
              style={styles.mainImage}
              source={{
                uri: productId,
              }}
              resizeMode={'contain'}
            />
          </Sepia>
        ) : effect === 'tint' ? (
          <Tint amount={1.25}>
            <Image
              style={styles.mainImage}
              source={{
                uri: productId,
              }}
              resizeMode={'contain'}
            />
          </Tint>
        ) : effect === 'colorMatrix' ? (
          <ColorMatrix
            matrix={concatColorMatrices([
              saturate(-0.9),
              contrast(5.2),
              invert(),
            ])}>
            <Image
              style={styles.mainImage}
              source={{
                uri: productId,
              }}
              resizeMode={'contain'}
            />
          </ColorMatrix>
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

      {/* Effects */}
      <View style={styles.effectPreviewWrapper}>
        <ScrollView horizontal={true}>
          {/* original */}
          <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('original')}>
            <Text style={styles.previewTitle}>Original</Text>
            <Brightness>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </Brightness>
          </TouchableOpacity>

          {/*  Grayscale */}
          <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('grayscale')}>
            <Text style={styles.previewTitle}> Grayscale </Text>
            <Grayscale>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </Grayscale>
          </TouchableOpacity>

          {/* Sepia */}
          <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('sepia')}>
            <Text style={styles.previewTitle}>Sepia</Text>
            <Sepia>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </Sepia>
          </TouchableOpacity>

          {/* Tint */}
          <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('tint')}>
            <Text style={styles.previewTitle}>Tint</Text>
            <Tint amount={1.25}>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </Tint>
          </TouchableOpacity>

          {/* Color Matrix */}
          <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('colorMatrix')}>
            <Text style={styles.previewTitle}>Color Matrix</Text>
            <ColorMatrix
              matrix={concatColorMatrices([
                saturate(-0.9),
                contrast(5.2),
                invert(),
              ])}>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </ColorMatrix>
          </TouchableOpacity>

          {/* Saturate */}
          {/* <TouchableOpacity
            style={styles.previewImageWRapper}
            onPress={() => setEffect('saturate')}>
            <Text style={styles.previewTitle}>Saturate</Text>
            <Saturate amount={(number = 1)}>
              <Image
                source={{
                  uri: productId,
                }}
                style={styles.previewImage}
              />
            </Saturate>
          </TouchableOpacity> */}
        </ScrollView>
      </View>

      {/* footer */}
      <View style={styles.footerWrapper}>
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>FITER</Text>
        </View>
        <View style={styles.footerSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditImage');
            }}>
            <Text style={styles.footerTitle}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
  heaerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  mainImageWrapper: {
    display: 'flex',
  },
  effectPreviewWrapper: {
    display: 'flex',
    marginTop: '15%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  headerSubTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 140,
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: 'white',
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

  mainImage: {
    width: width,
    height: height / 2,
  },
  previewImage: {
    width: width / 4,
    height: width / 4,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    alignContent: 'center',
  },
  previewImageWRapper: {
    alignItems: 'center',
    marginRight: 10,
  },
});
