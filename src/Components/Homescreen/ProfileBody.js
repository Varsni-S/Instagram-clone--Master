import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={profileImage}
              style={{
                resizeMode: 'cover',
                width: 80,
                height: 80,
                borderRadius: 100,
                backgroundColor: 'red',
              }}
            />
            <Text
              style={{
                paddingVertical: 5,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {name}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
              {post}
            </Text>
            <Text style={{color: 'white'}}>Posts</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
              {followers}
            </Text>
            <Text style={{color: 'white'}}>Followers</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
              {following}
            </Text>
            <Text style={{color: 'white'}}>Following</Text>
          </View>
        </View>
      )}
    </View>
  );
};

// profile Button

export const ProfileButtons = ({id}) => {
  const [follow, setFollow] = useState(follow);

  return (
    <>
      {id === 0 ? null : (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 5,
          }}>
          <TouchableOpacity onPress={() => setFollow(!follow)}>
            <View
              style={{
                width: 160,
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: follow ? 'white' : 'white'}}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '42%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>Message</Text>
          </View>
          <View
            style={{
              width: '10%',
              height: 35,
              borderWidth: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{fontSize: 20, color: 'white'}}
            />
          </View>
        </View>
      )}
    </>
  );
};
