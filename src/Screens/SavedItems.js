import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import Post from '../Components/Homescreen/post';
import {useSelector, useDispatch} from 'react-redux';

export default function SavedItems() {
  const {saveItem} = useSelector(state => state.mainReducer);
  // console.log(saveItem, 'saved');
  return (
    <View style={{backgroundColor: 'black'}}>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        {saveItem?.map((content, index) => (
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
