import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {FriendsProfileData} from '../StaticDatas/FriendsProfileData';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faEllipsisV,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  ProfileBody,
  ProfileButtons,
} from '../Components/Homescreen/ProfileBody';
import {ScrollView} from 'react-native-gesture-handler';
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
      {/* Profile body */}
      <ProfileBody
        name={name}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons id={1} />
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 15,
          fontWeight: 'bold',
          color: 'white',
        }}>
        Suggested for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingTop: 10,
        }}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        width: 160,
                        height: 200,
                        margin: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        borderColor: 'white',
                        borderRadius: 2,
                        position: 'relative',
                      }}>
                      <TouchableOpacity
                        onPress={() => setClose(true)}
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                        }}>
                        <FontAwesomeIcon
                          icon={faTimes}
                          style={{
                            fontSize: 20,
                            color: 'white',
                            opacity: 0.5,
                          }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 16,
                          color: 'white',
                        }}>
                        {data.name}
                      </Text>
                      <Text style={{fontSize: 12, color: 'white'}}>
                        {data.accountName}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{width: '80%', paddingVertical: 10}}>
                        <View
                          style={{
                            width: '100%',
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? null : '#3493D9',
                            borderWidth: isFollow ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: isFollow ? 'white' : 'white'}}>
                            {isFollow ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
}
