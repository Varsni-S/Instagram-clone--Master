import {View, Text, Dimensions, Image} from 'react-native';
import React, {useRef, useState} from 'react';
// import Video from 'react-native-video';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faHeartCircleBolt,
  faMusic,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

export default function SingleReel({item, index, currentIndex}) {
  console.log(item.video, index, currentIndex);
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(item.video);

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
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        {/* <Video
          videoRef={videoRef}
          // onBuffer={onBuffer}
          // onError={onError}
          // repeat={true}
          resizeMode="cover"
          // paused={currentIndex == index ? false : true}
          source={item.video}
          //  muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        /> */}
        {/* <Video
          style={styles.backgroundVideo}
          controls={true}
          muted={false}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            //uri: videoGotFromRedux.videoUrl,
          }}
        /> */}
      </TouchableOpacity>
      <FontAwesomeIcon
        icon={faVolumeMute}
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      {/* <Text
        style={{
          color: 'white',
        }}>
        SingleReel
      </Text> */}
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
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
