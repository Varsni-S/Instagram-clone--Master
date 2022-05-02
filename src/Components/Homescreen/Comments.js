import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import staticPosts from '../../StaticDatas/Datas';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane, faHeart} from '@fortawesome/free-solid-svg-icons';

export default function Comments() {
  const [like, setLike] = useState(false);

  const [comment, setComment] = useState('');

  const likeToggled = () => {
    setLike(!like);
  };
  const data = {
    id: 2,
    contentText: comment,
    imageUrl: require('../../assests/users/cat.jpeg'),
    profileName: 'Saranya',
    time: '3h',
    likes: '450 Likes',
  };
  console.log(data, staticPosts, 'dd');

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView>
        {staticPosts.map((content, index) => (
          <View>
            <View key={index} style={{flexDirection: 'row', padding: 15}}>
              <Image
                source={content.imageUrl}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              />
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                {content.profileName}
              </Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                {content.contentText}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 60, marginTop: -33}}>
              <Text style={{color: 'white', marginLeft: 10}}>
                {content.time}
              </Text>
              <Text style={{color: 'white', marginLeft: 10}}>
                {content.likes}
              </Text>
            </View>
            {/* <View>
              <TouchableOpacity style={{marginLeft: 340}} onPress={likeToggled}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={22}
                  color={like ? 'red' : 'white'}
                  //  style={{marginBottom: -20}}
                />
              </TouchableOpacity>
            </View> */}
          </View>
        ))}
      </ScrollView>

      {/*  */}
      {/* add comments */}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            borderColor: 'white',
            borderRadius: 15,
            width: '85%',
            height: 40,
            paddingLeft: 20,
            borderWidth: 0.5,
            fontSize: 15,
            color: 'white',
            marginBottom: 5,
            padding: 5,
            margin: 5,
          }}
          onChangeText={e => setComment(e)}
          placeholder="Add Comments"
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={{padding: 5, marginTop: 5}}
          onPress={() => (staticPosts.push(data), setComment(''))}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
