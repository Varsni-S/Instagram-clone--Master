import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

export default function header({icon1, icon2, heading}) {
  const navigation = useNavigation();

  const refRBSheet = useRef();

  const newContentFunction = () => {
    refRBSheet.current.open();
  };

  const newSetting = () => {
    refRBSheet.current.open();
  };

  //reels camera
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
    <>
      <View style={style.header}>
        <Text style={{fontSize: 22, color: 'white'}}>{heading}</Text>
        <View style={style.headerRight}>
          <TouchableOpacity onPress={newContentFunction}>
            <FontAwesomeIcon
              icon={icon1 ? icon1 : ''}
              color="white"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              icon2 != 'bars'
                ? navigation.navigate('MessagingScreen')
                : alert('edit');
            }}>
            <FontAwesomeIcon
              icon={icon2 ? icon2 : ''}
              color="white"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={200}
        openDuration={200}
        closeDuration={150}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'black',
            opacity: 0.9,
          },
          container: {
            backgroundColor: 'black',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
        }}>
        <View style={style.bottomSheetContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GalleryScreen'), refRBSheet.current.close();
            }}>
            <Text style={style.bottomSheetText}>Posts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              videoCapture(), refRBSheet.current.close();
            }}>
            {/*  navigation.navigate('ReelsCamera') */}
            <Text style={style.bottomSheetText}>Reels</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting'), refRBSheet.current.close();
            }}>
            <Text style={style.bottomSheetText}>Settinng</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.bottomSheetText}>Live </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    //borderBottomColor: 'white',
  },
  headerRight: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetContainer: {
    // backgroundColor: 'yellow',
    height: 200,
    paddingVertical: 20,
  },
  bottomSheetText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
});
