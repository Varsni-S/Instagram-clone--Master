import {View, Text, Image} from 'react-native';
import React from 'react';

const ProfileBody = ({
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

export default ProfileBody;
