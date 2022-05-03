import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Header from '../Components/Homescreen/header';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import TopTabNav from '../Navigators/TopTabNav';
import {useNavigation} from '@react-navigation/native';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import {useSelector, useDispatch} from 'react-redux';

export default function ProfileScreen() {
  const {name, accountname, bio} = useSelector(state => state.mainReducer);

  // storry circle
  let circuls = [];
  let numberofcircels = 10;
  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'grey',
            }}>
            <FontAwesomeIcon icon={faPlus} color="white" size={30} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'grey',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  const navigation = useNavigation();

  //Logout
  const signOut = () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header heading="Profile" icon1="plus-square" icon2="bars" />

      <ScrollView>
        <View style={{flex: 1, marginTop: 10, flexDirection: 'row'}}>
          <Image
            source={require('../assests/users/profilePic.jpeg')}
            style={{
              width: 75,
              height: 75,
              borderRadius: 37.5,
            }}
          />
          {/* numeric count */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                color: 'white',
                marginLeft: 35,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              20
            </Text>
            <Text
              style={{
                color: 'white',
                marginLeft: 58,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              250
            </Text>
            <Text
              style={{
                color: 'white',
                marginLeft: 65,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              120
            </Text>
          </View>
          {/* post followers following */}
          <View style={{flexDirection: 'row', marginTop: 55, marginLeft: -250}}>
            <Text
              style={{
                color: 'white',
                marginLeft: 20,
                //marginRight: 2,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Post
            </Text>
            <Text
              style={{
                color: 'white',
                marginLeft: 28,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Followers
            </Text>
            <Text
              style={{
                color: 'white',
                marginLeft: 25,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Following
            </Text>
          </View>
        </View>
        {/* user name bio */}
        <Text
          style={{
            color: 'white',
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: 'white',
            marginLeft: 15,
          }}>
          {accountname}
        </Text>

        <Text
          style={{
            color: 'white',
            marginLeft: 15,
          }}>
          {bio}
        </Text>
        {/* edit user */}
        <View style={{flexDirection: 'row'}}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfileScreen')}>
              <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* story */}
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 17,
            padding: 5,
            letterSpacing: 1,
          }}>
          {' '}
          Story Highlight{' '}
        </Text>
        <Text
          style={{
            color: 'white',
            padding: 5,
            fontSize: 14,
            letterSpacing: 1,
          }}>
          {' '}
          Keep your favourite stories on your profile{' '}
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
        {/* toptab Navigation */}
        <TopTabNav />
      </ScrollView>

      {/* Logout */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 120,
        }}>
        <Button title="Log Out" onPress={signOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'black',
    width: 370,
    marginLeft: 8,
    borderRadius: 6,
    textAlign: 'center',
  },
  icon: {
    borderWidth: 1,
    padding: 8,
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'black',
    width: 38,
    marginLeft: 12,
    borderRadius: 8,
  },
});
