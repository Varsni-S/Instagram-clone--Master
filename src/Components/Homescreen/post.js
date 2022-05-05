import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Share from 'react-native-share';

export default function post({imageUrl, contentText, profileName}) {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  const [like, setLike] = useState(false);
  const [bookmark, setBookMark] = useState(false);

  const likeToggled = () => {
    setLike(!like);
  };

  const bookMarkToggled = () => {
    setBookMark(!bookmark);
  };

  const moreFunction = () => {
    refRBSheet.current.open();
  };

  const url = 'https://awesome.contents.com/';
  const title = 'Awesome Contents';
  const message = 'Please check this out.';

  const options = {
    title,
    url,
    message,
  };

  const myCustomShare = async () => {
    const shareOptions = {
      // title: 'Hello',
      // message: 'Post is shared with Your Friends',
      // uri: 'https://images.unsplash.com/photo-1624887009213-040347b804c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',
    };
    try {
      const ShareResponse = await Share.open(options);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
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
          <TouchableOpacity>
            <FontAwesomeIcon
              icon="ellipsis-v"
              size={20}
              color="white"
              onPress={moreFunction}
            />
          </TouchableOpacity>
          {/* bottom sheet */}
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            height={200}
            openDuration={200}
            closeDuration={150}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'black',
                opacity: 0.9,
              },
              container: {
                backgroundColor: 'black',
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
              },
              draggableIcon: {
                backgroundColor: 'white',
              },
            }}>
            <View style={style.bottomSheetContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('NotificationScreen'),
                    refRBSheet.current.close();
                }}>
                <Text style={style.bottomSheetText}>Add to favorites </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProfileScreen'),
                    refRBSheet.current.close();
                }}>
                <Text style={style.bottomSheetText}>Setting</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProfileScreen'),
                    refRBSheet.current.close();
                }}>
                <Text style={style.bottomSheetText}>Profile </Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
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
          <TouchableOpacity>
            <FontAwesomeIcon
              icon="comment"
              size={20}
              color="white"
              onPress={() => {
                navigation.navigate('Comments');
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={myCustomShare}>
            <FontAwesomeIcon icon="paper-plane" size={20} color="white" />
            {/* navigation.navigate('MessagingScreen');} */}
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
  bottomSheetContainer: {
    // backgroundColor: 'yellow',
    height: 200,
    paddingVertical: 20,
  },
  bottomSheetText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
  },
});
