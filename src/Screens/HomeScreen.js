import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import Header from '../Components/Homescreen/header';
import NewStory from '../Components/Homescreen/NewStory';
import Post from '../Components/Homescreen/post';
import Story from '../Components/Homescreen/story';
import {useSelector, useDispatch} from 'react-redux';

export default function HomeScreen() {
  const {data: StaticDatas} = useSelector(state => state.mainReducer);

  // console.log(StaticDatas, 'dataaaa');

  return (
    <View style={style.container}>
      <Header heading="Instagram" icon1="plus-square" icon2="comment-dots" />

      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        {/* Story */}
        <ScrollView>
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
});

{
  /* <ScrollView
        //   horizontal={true}
        //   showsHorizontalScrollIndicator={false}
        //   style={style.body}>
        //   <Story />
        // </ScrollView> */
}
