import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../Components/Homescreen/header';
import NewStory from '../Components/Homescreen/NewStory';
import Post from '../Components/Homescreen/post';
import Story from '../Components/Homescreen/story';
import StaticDatas from '../StaticDatas/Datas';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Header heading="Instagram" icon1="plus-square" icon2="comment-dots" />
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        {/* Story */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style.body}>
          {/* <Story /> */}
          <NewStory />
        </ScrollView>
        {/* Post */}
        {StaticDatas.map((content, index) => (
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  body: {
    height: 140,
  },
});
