import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faTimes} from '@fortawesome/free-solid-svg-icons';
const storyInfo = [
  {
    id: 1,
    index: 0,
    name: 'Your Story',
    image: require('../../assests/users/profilePic.jpeg'),
    story: require('../../assests/users/profilePic.jpeg'),
  },

  {
    id: 0,
    index: 1,
    name: 'Anirudh',
    image: require('../../assests/users/butterfly.jpg'),
    story: require('../../assests/users/butterfly.jpg'),
  },
  {
    id: 0,
    index: 2,
    name: 'neymar',
    image: require('../../assests/users/whitegirl.jpg'),
    story: require('../../assests/users/whitegirl.jpg'),
  },

  {
    id: 0,
    index: 3,
    name: 'Ratan',
    image: require('../../assests/users/teddy.jpg'),
    story: require('../../assests/users/teddy.jpg'),
  },

  {
    id: 0,
    index: 4,
    name: 'yuvan',
    image: require('../../assests/users/girl.jpeg'),
    story: require('../../assests/users/girl.jpeg'),
  },
  {
    id: 0,
    index: 5,
    name: 'viratkholi',
    image: require('../../assests/users/kitty.jpeg'),
    story: require('../../assests/users/kitty.jpeg'),
  },
];

const Status = ({route, navigation}) => {
  //var {name} = route.params;
  const [name, setName] = useState(route.params.name);
  const [image, setImage] = useState(route.params.image);

  let ind = route.params.index;
  console.log(storyInfo[3], ind, 'oooo');

  let progres = new Animated.Value(-300);

  const [like, setLike] = useState(false);

  const likeToggled = () => {
    setLike(!like);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      storyInfo[ind + 1]
        ? setName(storyInfo[ind + 1].name)
        : navigation.goBack();
      storyInfo[ind + 1]
        ? setImage(storyInfo[ind + 1].image)
        : navigation.goBack();

      //navigation.goBack();
    }, 3000);

    Animated.timing(progres, {
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, [image, name]);

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={[
            {
              height: 3,
              width: '100%',
              backgroundColor: 'white',
              position: 'absolute',
            },
            {transform: [{translateX: progres}]},
          ]}></Animated.View>
      </View>

      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faTimes} size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 575}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
        }}>
        <TextInput
          placeholder="send message"
          placeholderTextColor="white"
          style={{
            borderColor: 'white',
            borderRadius: 15,
            width: '85%',
            height: 40,
            paddingLeft: 20,
            borderWidth: 0.5,
            fontSize: 15,
            color: 'white',
            marginBottom: 5,
          }}
        />
        <TouchableOpacity style={{padding: 10}} onPress={likeToggled}>
          <FontAwesomeIcon
            icon={faHeart}
            size={22}
            color={like ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
