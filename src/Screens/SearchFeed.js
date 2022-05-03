import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import staticPosts from '../StaticDatas/Datas';
import Post from '../Components/Homescreen/post';
export default function SearchFeed() {
  return (
    <View style={{backgroundColor: 'black'}}>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        {staticPosts.map((content, index) => (
          <Post
            key={index}
            imageUrl={content.imageUrl}
            contentText={content.contentText}
            profileName={content.profileName}
          />
        ))}
      </ScrollView>
    </View>
  );
}
