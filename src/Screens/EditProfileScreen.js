import {
  View,
  Text,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAccountName, setBio, setChangeImage} from '../redux/action';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = ({route, navigation}) => {
  const refRBSheet = useRef();
  const changeProfile = () => {
    refRBSheet.current.open();
  };

  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');

  const [userAccountName, setUserAccountName] = useState('');

  const [userBio, setUserBio] = useState('');

  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1624887009213-040347b804c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',
  );

  const {name, accountname} = useSelector(state => state.mainReducer);

  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };

  const submit = () => {
    dispatch(setName(userName)),
      dispatch(setAccountName(userAccountName)),
      dispatch(setBio(userBio)),
      dispatch(setChangeImage(image));
    navigation.goBack();
    TostMessage();
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  // console.log('edit', name);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="white" size={28} />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {' '}
          Edit Profile
        </Text>
        <TouchableOpacity onPress={submit}>
          <FontAwesomeIcon
            icon={faCheck}
            size={25}
            style={{color: '#3493D9'}}
          />
        </TouchableOpacity>
      </View>

      {/* profile */}
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={{uri: image}}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <TouchableOpacity onPress={changeProfile}>
          <Text
            style={{
              color: '#3493D9',
              fontSize: 20,
              marginTop: 8,
            }}>
            Change Profile Photo
          </Text>
        </TouchableOpacity>
      </View>

      {/* input fields */}
      <View style={{padding: 10}}>
        <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor={'grey'}
            onChangeText={value => setUserName(value)}
            value={userName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Account Name"
            placeholderTextColor={'grey'}
            onChangeText={value => setUserAccountName(value)}
            value={userAccountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            placeholderTextColor={'grey'}
            onChangeText={value => setUserBio(value)}
            value={userBio}
            style={{
              color: 'white',
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            placeholderTextColor={'grey'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            fontSize: 18,
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            fontSize: 18,
          }}>
          Persnol information setting
        </Text>
      </View>

      {/* bottomSheet */}
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
              takePhotoFromCamera(), refRBSheet.current.close();
            }}>
            <Text style={style.bottomSheetText}>Take Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              chooseFromGallery(), refRBSheet.current.close();
            }}>
            <Text style={style.bottomSheetText}> Choose From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.bottomSheetText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};
export default EditProfileScreen;

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderBottomWidth: 1,
  },
  headerRight: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheetContainer: {
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
