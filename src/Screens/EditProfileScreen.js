import {
  View,
  Text,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAccountName, setBio} from '../redux/action';

const EditProfileScreen = ({route, navigation}) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');

  const [userAccountName, setUserAccountName] = useState('');

  const [userBio, setUserBio] = useState('');

  const {name, accountname} = useSelector(state => state.mainReducer);

  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  const submit = () => {
    dispatch(setName(userName)),
      dispatch(setAccountName(userAccountName)),
      dispatch(setBio(userBio));

    navigation.goBack();
    TostMessage();
  };
  console.log('edit', name);
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
          source={require('../assests/users/profilePic.jpeg')}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text
          style={{
            color: '#3493D9',
            fontSize: 20,
            marginTop: 8,
          }}>
          Change Profile Photo
        </Text>
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
            placeholderTextColor={'white'}
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
            // borderColor: '#EFEFEF',
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
            // borderColor: '#EFEFEF',
          }}>
          Persnol information setting
        </Text>
      </View>
    </View>
  );
};
export default EditProfileScreen;
