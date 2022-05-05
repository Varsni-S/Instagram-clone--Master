import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import staticPosts from '../StaticDatas/Datas';
import Post from '../Components/Homescreen/post';
export default function SearchFeed() {
  const searchData = [
    {
      id: 0,
      images: require('../assests/search/p1.jpg'),
      profileName: 'street_Vlogger',
      contentText: 'nice',
    },
    {
      id: 1,
      images: require('../assests/search/p2.jpg'),
      profileName: 'curly_queen',
      contentText: 'nice',
    },
    {
      id: 2,
      images: require('../assests/search/p3.jpg'),
      profileName: 'cameraFlip',
      contentText: 'nice',
    },
    {
      id: 3,
      images: require('../assests/search/p4.jpg'),
      profileName: 'FlyingColors',
      contentText: 'nice',
    },
    {
      id: 4,
      images: require('../assests/search/p5.jpg'),
      profileName: 'street_Vlogger',
      contentText: 'nice',
    },
    {
      id: 5,
      images: require('../assests/search/p6.jpg'),
      profileName: 'Awesomecup',
      contentText: 'nice',
    },
    {
      id: 6,
      images: require('../assests/search/p7.jpg'),
      profileName: 'cleverMind',
      contentText: 'nice',
    },
  ];
  return (
    <View style={{backgroundColor: 'black'}}>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        {searchData.map((content, index) => (
          <Post
            key={index}
            imageUrl={content.images}
            contentText={content.contentText}
            profileName={content.profileName}
          />
        ))}
      </ScrollView>
    </View>
  );
}
