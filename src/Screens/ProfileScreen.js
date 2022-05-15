import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';
import Header from '../Components/Homescreen/header';
import auth from '@react-native-firebase/auth';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import TopTabNav from '../Navigators/TopTabNav';
import {useNavigation} from '@react-navigation/native';
import {faBars, faPlus, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import RBSheet from 'react-native-raw-bottom-sheet';

import {useSelector, useDispatch} from 'react-redux';

export default function ProfileScreen() {
  const {name, accountname, bio, changeImage} = useSelector(
    state => state.mainReducer,
  );

  // story circle
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

  //bottom sheet

  const refRBSheet = useRef();

  const newContentFunction = () => {
    refRBSheet.current.open();
  };

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
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
          Profile
        </Text>
        <TouchableOpacity
          style={{marginLeft: 270}}
          onPress={newContentFunction}>
          <FontAwesomeIcon icon={faBars} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* profile data */}

      <View style={{flex: 1, margin: 5, flexDirection: 'row'}}>
        <Image
          source={{uri: changeImage}}
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

          <TouchableOpacity onPress={() => navigation.navigate('Followers')}>
            <Text
              style={{
                color: 'white',
                marginLeft: 58,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              250
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Following')}>
            <Text
              style={{
                color: 'white',
                marginLeft: 65,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              120
            </Text>
          </TouchableOpacity>
        </View>

        {/* post followers following */}
        <View style={{flexDirection: 'row', marginTop: 55, marginLeft: -250}}>
          <Text
            style={{
              color: 'white',
              marginLeft: 20,
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
      <View style={{marginTop: -190, marginBottom: 5}}>
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
      </View>

      {/* edit user */}

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* story */}
      <View>
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
            //  backgroundColor: 'red',
          }}>
          {circuls}
        </ScrollView>
      </View>

      {/* top tab */}

      <TopTabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: -150,
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

  bottomSheetContainer: {
    // backgroundColor: 'yellow',
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
