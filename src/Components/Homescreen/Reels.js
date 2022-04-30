import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from './SingleReel';
export default function Reels() {
  const videoData = [
    {
      id: 1,
      video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
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
      video:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
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
      video:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
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
      video:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
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
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReel
          key={index}
          item={item}
          index={index}
          currentIndex={currentIndex}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  );
}
