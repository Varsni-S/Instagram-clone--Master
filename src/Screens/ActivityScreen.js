import React, {useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {FriendsProfileData} from '../StaticDatas/FriendsProfileData';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export default function ActivityScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}>
      {/* header */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
          color: 'white',
        }}>
        Activity
      </Text>

      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
          This Week
        </Text>

        {/* started following list */}
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.push('FriendProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                  })
                }>
                <Text style={{fontWeight: 'bold', color: 'white'}}>
                  {data.name} ,
                </Text>
              </TouchableOpacity>
            );
          })}
          <Text style={{color: 'white'}}> Started following you</Text>
        </View>

        {/* earlier List */}
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
          Earlier
        </Text>
        {FriendsProfileData.slice(2, 5).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('FriendProfile', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '80%',
                  }}>
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15, color: 'white', width: '80%'}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      {data.name}
                    </Text>
                    , who you might know, is on instagram
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{width: follow ? 72 : 68, marginRight: 18}}>
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: follow ? null : '#3493D9',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#DEDEDE' : null,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: follow ? 'white' : 'white'}}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* suggestions */}
        <Text style={{fontWeight: 'bold', paddingVertical: 10, color: 'white'}}>
          Suggestions for you
        </Text>
        {FriendsProfileData.slice(5, 12).map((data, index) => {
          const [follows, setFollows] = useState(data.follow);
          const [close, setClose] = useState(false);
          return (
            <View key={index}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.push('FriendProfile', {
                          name: data.name,
                          profileImage: data.profileImage,
                          follow: follows,
                          post: data.posts,
                          followers: data.followers,
                          following: data.following,
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '84%',
                      }}>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{fontSize: 12, opacity: 0.5, color: 'white'}}>
                          {data.accountName}
                        </Text>
                        <Text
                          style={{fontSize: 12, opacity: 0.5, color: 'white'}}>
                          Sugggested for you
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  {/* suggestion follow icons */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: -55,
                    }}>
                    {follows ? (
                      <TouchableOpacity
                        onPress={() => setFollows(!follows)}
                        style={{
                          width: follows ? 90 : 68,
                        }}>
                        <View
                          style={{
                            width: '90%',
                            height: 30,

                            borderRadius: 5,
                            backgroundColor: follows ? null : '#3493D9',
                            borderWidth: follows ? 1 : 0,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{color: follows ? 'white' : 'white'}}>
                            {follows ? 'Following' : 'Follow'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => setFollows(!follows)}
                          style={{
                            width: follows ? 90 : 68,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: 30,
                              borderRadius: 5,
                              backgroundColor: follows ? null : '#3493D9',
                              borderWidth: follows ? 1 : 0,
                              borderColor: '#DEDEDE',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: follows ? 'white' : 'white'}}>
                              {follows ? 'Following' : 'Follow'}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setClose(true)}
                          style={{paddingHorizontal: 10}}>
                          <FontAwesomeIcon
                            icon={faTimes}
                            style={{fontSize: 14, color: 'white', opacity: 0.8}}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggetions</Text>
        </View>
      </ScrollView>
    </View>
  );
}
