import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import SingleReel from './SingleReel';
export default function Reels() {
  const videoData = [
    {
      video: require('../../assests/videos/video1.mp4'),
      title: 'Varsni',
      description: 'feels the beauty',
      likes: '454',
      isLike: false,
    },
    {
      video: require('../../assests/videos/video2.mp4'),
      title: 'jeevitha',
      description: 'nice looks',
      likes: '654',
      isLike: false,
    },
    {
      video: require('../../assests/videos/video3.mp4'),
      title: 'tanika',
      description: 'good capture',
      likes: '554',
      isLike: false,
    },
    {
      video: require('../../assests/videos/video4.mp4'),
      title: 'Aishu',
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
