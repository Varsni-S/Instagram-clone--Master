import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from './SingleReel';
import {useSelector} from 'react-redux';

export default function Reels() {
  const {videoData: videoData} = useSelector(state => state.mainReducer);

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
