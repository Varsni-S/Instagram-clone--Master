import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {faCaretDown, faTimes} from '@fortawesome/free-solid-svg-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ImageAdjust({route}) {
  const navigation = useNavigation();

  const productId = route.params.image1?.path;
  console.log(route.params.image1, 'adjust');

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
            <Text style={styles.headerSubTitle}>Next</Text>
          </View>
        </View>
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
    height: 450,
  },
});
