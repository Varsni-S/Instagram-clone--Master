import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {FriendsProfileData} from '../StaticDatas/FriendsProfileData';
export default function Followers() {
  return (
    <View style={styles.container}>
      <FlatList
        data={FriendsProfileData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <View style={styles.userImgWrapper}>
              <Image source={item.profileImage} style={styles.userImg} />
            </View>
            <View style={styles.textSection}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.user}>{item.accountName}</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  borderWidth: 1,
                  marginTop: 15,
                  padding: 5,
                  color: 'white',
                  borderColor: 'white',
                  backgroundColor: 'black',
                  width: 80,

                  borderRadius: 6,
                  textAlign: 'center',
                }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'grey',
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  card: {
    //width: '100%',
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    marginBottom: 5,
    width: 200,
    borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  user: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  postTime: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  messageText: {
    fontSize: 14,
    color: 'grey',
  },
});
