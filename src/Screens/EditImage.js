import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faSun,
  faAdjust,
  faMagic,
  faFilter,
  faCaretUp,
  faThermometerEmpty,
  faTint,
} from '@fortawesome/free-solid-svg-icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function EditImage({route}) {
  const productId = route.params.image1?.path;

  const navigation = useNavigation();
  console.log(productId, route.params.image1, 'edit');

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
          icon={faMagic}
          size={20}
          color="white"
          style={{marginLeft: 150}}
        />
        <TouchableOpacity
          onPress={() => {
            saveImg();
          }}>
          <Text style={styles.headerSubTitle}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <View style={styles.mainImageWrapper}>
        <Image
          style={styles.mainImage}
          source={{
            uri: productId,
          }}
          resizeMode={'contain'}
        />
      </View>

      {/* Editing tools */}
      <ScrollView style={styles.editingTool} horizontal={true}>
        <TouchableOpacity
          style={styles.toolSpace}
          onPress={() => {
            navigation.navigate('ImageAdjust', {image1: {path: productId}});
          }}>
          <Text style={styles.toolText}>Adjust </Text>
          <FontAwesomeIcon icon={faAdjust} color="white" size={40} />
        </TouchableOpacity>
        <View style={styles.toolSpace}>
          <Text style={styles.toolText}>Brightness</Text>
          <FontAwesomeIcon icon={faSun} color="white" size={40} />
        </View>
        <View style={styles.toolSpace}>
          <Text style={styles.toolText}>Filter </Text>
          <FontAwesomeIcon icon={faFilter} color="white" size={40} />
        </View>
        <View style={styles.toolSpace}>
          <Text style={styles.toolText}>Saturation </Text>
          <FontAwesomeIcon icon={faCaretUp} color="white" size={70} />
        </View>
        <View style={styles.toolSpace}>
          <Text style={styles.toolText}>Warm </Text>
          <FontAwesomeIcon icon={faThermometerEmpty} color="white" size={40} />
        </View>
        <View style={styles.toolSpace}>
          <Text style={styles.toolText}>Filter </Text>
          <FontAwesomeIcon icon={faTint} color="white" size={40} />
        </View>
      </ScrollView>

      {/* footer */}
      <View style={styles.footerWrapper}>
        <View style={styles.footerSection}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ApplyFilter', {
                image1: {path: productId},
              });
            }}>
            <Text style={styles.footerTitle}>FILTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pickedFooterSection}>
          <Text style={styles.pickedFooterTitle}>EDIT</Text>
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
    height: 450,
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
  editingTool: {
    flexDirection: 'row',
    margin: 10,
    padding: 15,
    marginTop: 30,
  },
  toolText: {
    color: 'white',
    paddingBottom: 5,
  },
  toolSpace: {
    padding: 20,
  },
});
