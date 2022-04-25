import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import config from '../../config/icon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;
  let progres = new Animated.Value(-300);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 3000);

    Animated.timing(progres, {
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, []);

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
            <FontAwesomeIcon icon="ellipsis-v" size={15} color="white" />
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

        <TouchableOpacity>
          <Image
            style={[{height: 30, width: 30}]}
            source={config.images.messageIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
