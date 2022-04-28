import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function post({imageUrl, contentText, profileName}) {
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);
  const likeToggled = () => {
    setLike(!like);
  };
  const bookMarkToggled = () => {
    setBookMark(!bookmark);
  };
  return (
    <View style={style.postBox}>
      <View style={style.postHeader}>
        <View style={{flexDirection: 'row', width: 300, alignItems: 'center'}}>
          {/* feed Header */}
          <View style={style.profileImageBox}>
            <Image style={style.profilePicImage} source={imageUrl} />
          </View>
          <Text style={style.profileUserName}>{profileName}</Text>
        </View>
        <View>
          <FontAwesomeIcon icon="ellipsis-v" size={20} color="white" />
        </View>
      </View>
      {/* main feed */}
      <View style={style.postImageBox}>
        <Image style={style.postImage} source={imageUrl} />
      </View>
      <View style={style.postIcons}>
        {/* list of icons */}
        <View style={style.iconsLeft}>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon="heart"
              size={20}
              color={like ? 'red' : 'white'}
              onPress={likeToggled}
            />
          </TouchableOpacity>
          <FontAwesomeIcon icon="comment" size={20} color="white" />
          <TouchableOpacity>
            <FontAwesomeIcon
              icon="paper-plane"
              size={20}
              color="white"
              onPress={() => {
                navigation.navigate('MessagingScreen');
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={style.iconsRight}>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon="bookmark"
              size={20}
              color={bookmark ? 'red' : 'white'}
              onPress={bookMarkToggled}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.textContent}>
        <Text style={{fontSize: 18, color: 'white'}}>
          {like ? 778 : 777} Likes
        </Text>
        <Text style={{fontSize: 18, color: 'white'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              textTransform: 'lowercase',
            }}>
            {profileName}{' '}
          </Text>{' '}
          {contentText}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  postBox: {
    height: 470,
  },
  postHeader: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageBox: {
    width: '15%',
    height: '75%',
  },
  profilePicImage: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileUserName: {
    color: 'white',
    fontSize: 20,
    marginLeft: 13,
    textTransform: 'lowercase',
  },
  postImageBox: {
    height: 300,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  postIcons: {
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsLeft: {
    height: 40,
    width: '35%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContent: {
    paddingHorizontal: 10,
  },
});
