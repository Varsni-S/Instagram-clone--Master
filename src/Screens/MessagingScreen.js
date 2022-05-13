import React, {useRef} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

const MessagesData = [
  {
    id: '1',
    userName: 'varsni',
    userImg: require('../assests/users/butterfly.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'Jeevi',
    userImg: require('../assests/users/cat.jpeg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Kanika',
    userImg: require('../assests/users/cute.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Saryana',
    userImg: require('../assests/users/girl.jpeg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'CleverMind',
    userImg: require('../assests/users/teddy.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'CutePie',
    userImg: require('../assests/users/cute.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'SuperMachi',
    userImg: require('../assests/users/girl.jpeg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'CleverMind',
    userImg: require('../assests/users/teddy.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

export default function Message() {
  const navigation = useNavigation();
  // const phoneCall = () => {
  //   Linking.openURL(`tel:+1(944)-223-9791`);
  // };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* search bar */}
      <TextInput
        style={styles.textInputStyle}
        //   onChangeText={text => searchFilterFunction(text)}
        // value={search}
        underlineColorAndroid="transparent"
        placeholder="Search"
        placeholderTextColor="white"
      />

      {/* <Button
        title="Chat screen"
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
      /> */}

      {/* render message data */}
      <View style={styles.container}>
        <FlatList
          data={MessagesData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('ChatScreen', {userName: item.userName})
              }>
              <View style={styles.userInfo}>
                <View style={styles.userImgWrapper}>
                  <Image source={item.userImg} style={styles.userImg} />
                </View>
                <View style={styles.textSection}>
                  <View style={styles.userInfoText}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <View
                      onPress={
                        (phoneCall = () =>
                          Linking.openURL(`tel:+1(944)-223-9791`))
                      }>
                      <FontAwesomeIcon icon={faPhone} size={20} color="white" />
                    </View>

                    {/* <Text style={styles.postTime}>{item.messageTime}</Text> */}
                  </View>
                  <Text style={styles.messageText}>{item.messageText}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    width: '100%',
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
    width: 300,
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
  postTime: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  messageText: {
    fontSize: 14,
    color: 'grey',
    width: '80%',
  },
});
