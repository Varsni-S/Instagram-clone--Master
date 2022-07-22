import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faInfoCircle,
  faLock,
  faSignOut,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function Setting() {
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.subContainer}>
        <FontAwesomeIcon
          icon={faUser}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => {
          navigation.navigate('Demo');
        }}>
        <FontAwesomeIcon
          icon={faBell}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subContainer}>
        <FontAwesomeIcon
          icon={faLock}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subContainer}>
        <FontAwesomeIcon
          icon={faUserCircle}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subContainer}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subContainer} onPress={signOut}>
        <FontAwesomeIcon
          icon={faSignOut}
          color="white"
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,

    marginLeft: 10,
  },
  subContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
  },
});
