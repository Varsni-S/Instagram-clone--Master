import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FriendsProfileData} from '../StaticDatas/FriendsProfileData';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import ProfileBody from '../Components/Homescreen/ProfileBody';
export default function FriendProfile({route, navigation}) {
  const {name, profileImage, follow, post, followers, following} = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '92%',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {name}
          </Text>
          <FontAwesomeIcon
            icon={faEllipsisV}
            style={{fontSize: 20, color: 'white'}}
          />
        </View>
      </View>
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
    </View>
  );
}
