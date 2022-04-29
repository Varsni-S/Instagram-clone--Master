import {
  View,
  Text,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

const EditProfileScreen = ({route, navigation}) => {
  //const {name, accountName} = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
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
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
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
          <Text
            style={{
              opacity: 0.5,
              color: 'white',
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={'Varsu'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: 'white',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
              color: 'white',
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={'Varsni S'}
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
            placeholder="Website"
            placeholderTextColor={'grey'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
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
