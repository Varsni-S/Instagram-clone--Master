import {View, Text, Dimensions, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faMusic,
  faPause,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
export default function SingleReel({item, index, currentIndex}) {
  console.log(item.video, index, currentIndex, item);
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [pause, setPause] = useState(false);

  useEffect(() => {
    setPause(false);
  }, [currentIndex]);

  // const videoRef = useRef();

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(false);

  const likeToggled = () => {
    setLike(!like);
  };
  console.log(windowHeight, windowWidth);
  return (
    <View
      style={{
        width: '100%',
        height: windowHeight - 120,
      }}>
      {index == currentIndex && (
        <Video
          style={{
            flex: 1,
            width: windowWidth,
            height: windowHeight,
            position: 'absolute',
          }}
          paused={pause}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          // muted={mute}
          resizeMode="cover"
          source={{uri: item.video}}
        />
      )}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            width: 90,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setPause(!pause)}>
          <FontAwesomeIcon
            icon={pause ? faPlayCircle : faPause}
            size={30}
            style={{
              fontSize: mute ? 20 : 0,
              color: 'white',
              position: 'absolute',

              borderRadius: 100,
              padding: mute ? 20 : 0,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 0,
          padding: 10,
        }}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.imageUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <FontAwesomeIcon
              icon={faMusic}
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white', marginLeft: 10}}>Original Audio</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 0,
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity style={{padding: 10}} onPress={likeToggled}>
          <FontAwesomeIcon
            icon={faHeart}
            size={22}
            color={like ? 'red' : 'white'}
          />
          <Text style={{fontSize: 18, color: 'white', marginLeft: -2}}>
            {like ? 500 : 499}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <FontAwesomeIcon
            icon="comment"
            size={22}
            color="white"
            onPress={() => {
              navigation.navigate('Comments');
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <FontAwesomeIcon
            icon="paper-plane"
            size={22}
            color="white"
            onPress={() => {
              navigation.navigate('MessagingScreen');
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <FontAwesomeIcon
            icon="ellipsis-v"
            size={22}
            color="white"
            //  onPress={moreFunction}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <Image
            source={item.imageUrl}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
}
