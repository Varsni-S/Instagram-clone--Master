import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Story = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      index: 0,
      name: 'Your Story',
      image: require('../../assests/users/profilePic.jpeg'),
      story: require('../../assests/users/profilePic.jpeg'),
    },

    {
      id: 0,
      index: 1,
      name: 'Anirudh',
      image: require('../../assests/users/butterfly.jpg'),
      story: require('../../assests/users/butterfly.jpg'),
    },
    {
      id: 0,
      index: 2,
      name: 'neymar',
      image: require('../../assests/users/whitegirl.jpg'),
      story: require('../../assests/users/whitegirl.jpg'),
    },

    {
      id: 0,
      index: 3,
      name: 'Ratan',
      image: require('../../assests/users/teddy.jpg'),
      story: require('../../assests/users/teddy.jpg'),
    },

    {
      id: 0,
      index: 4,
      name: 'yuvan',
      image: require('../../assests/users/girl.jpeg'),
      story: require('../../assests/users/girl.jpeg'),
    },
    {
      id: 0,
      index: 5,
      name: 'viratkholi',
      image: require('../../assests/users/kitty.jpeg'),
      story: require('../../assests/users/kitty.jpeg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20, backgroundColor: 'black'}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.story,
                index: data.index,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Image
                    style={[{height: 25, width: 25}]}
                    // source={config.images.addIcon}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 14,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Story;
// opacity: data.id == 0 ? 1 : 0.5,
