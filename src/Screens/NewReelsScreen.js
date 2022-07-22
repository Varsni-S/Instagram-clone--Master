import {View, Text, Image, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import {addReels} from '../redux/action';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Video from 'react-native-video';

export default function NewReelsScreen({route}) {
  const arrayVideoData = useSelector(state => state.mainReducer.videoData);
  //console.log(arrayVideoData, 'kk');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const productIds = route.params.image1?.path;
  const video = route.params.video?.path;
  console.log(video, productIds, 'ddd');
  const [videoDatas, setVideoDatas] = useState({
    id: arrayVideoData.length + 1,
    video: productIds ? productIds : video,
    description: 'feels the beauty',
    imageUrl: {
      uri: 'https://cdn.pixabay.com/photo/2017/06/01/08/30/rolls-royce-2362821__340.jpg',
    },
    title: 'Suresh',
    time: 'now',
    likes: '0 Likes',
  });
  console.log(videoDatas, 'vd');

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
      }}>
      <Video
        style={{
          width: 400,
          height: 650,
        }}
        resizeMode="stretch"
        source={{uri: video}}
      />
      <View style={{marginTop: 12}}>
        <Button
          title="Next"
          onPress={() =>
            dispatch(addReels(videoDatas), navigation.navigate('ReelsScreen'))
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterSelector: {
    width: 250,
    height: 400,
    //marginBottom: 40,
  },
});
