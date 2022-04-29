import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import SingleReel from './SingleReel';
export default function Reels() {
  const videoData = [
    {
      id: 1,
      video: require('../../assests/videos/video1.mp4'),
      title: 'Varsni',
      imageUrl: {
        uri: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
      },
      description: 'feels the beauty',
      likes: '454',
      isLike: false,
    },
    {
      id: 2,
      video: require('../../assests/videos/video2.mp4'),
      imageUrl: {
        uri: 'https://cdn.pixabay.com/photo/2017/06/01/08/30/rolls-royce-2362821__340.jpg',
      },
      title: 'jeevitha',
      description: 'nice looks',
      likes: '654',
      isLike: false,
    },
    {
      id: 3,
      video: require('../../assests/videos/video3.mp4'),
      title: 'tanika',
      imageUrl: {
        uri: 'https://cdn.pixabay.com/photo/2020/09/09/13/03/bike-riding-5557589__340.png',
      },
      description: 'good capture',
      likes: '554',
      isLike: false,
    },
    {
      id: 4,
      video: require('../../assests/videos/video4.mp4'),
      title: 'Aishu',
      imageUrl: {
        uri: 'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122__340.jpg',
      },
      description: 'keep rocking',
      likes: '224',
      isLike: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <SwipeListView
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
}
