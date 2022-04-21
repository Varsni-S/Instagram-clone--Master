import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import config from '../../config/icon';

const Story = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../assests/users/dhoni.jpg'),
      story: require('../../assests/users/dhoni.jpg'),
    },
    {
      id: 0,
      name: 'viratkholi',
      image: require('../../assests/users/virat.png'),
      story: require('../../assests/users/virat.png'),
    },
    {
      id: 0,
      name: 'Anirudh',
      image: require('../../assests/users/ani.jpeg'),
      story: require('../../assests/users/ani.jpeg'),
    },
    {
      id: 0,
      name: 'neymar',
      image: require('../../assests/users/neymar.png'),
      story: require('../../assests/users/neymar.png'),
    },
    ,
    {
      id: 0,
      name: 'Ratan',
      image: require('../../assests/users/ratan.jpg'),
      story: require('../../assests/users/ratan.jpg'),
    },
    ,
    {
      id: 0,
      name: 'yuvan',
      image: require('../../assests/users/yuvan.jpg'),
      story: require('../../assests/users/yuvan.jpg'),
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
                    source={config.images.addIcon}
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
                  opacity: data.id == 0 ? 1 : 0.5,
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

// import {View, Text, StyleSheet, Image} from 'react-native';
// import React from 'react';

// export default function story({imageUrl, profileName}) {
//   return (
//     <View style={style.box}>
//       <View style={style.storyImageBox}>
//         <Image style={style.storyImage} source={imageUrl} />
//       </View>
//       <Text style={style.storyName}>{profileName}</Text>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   body: {
//     height: 120,
//   },
//   box: {
//     paddingVertical: 5,
//     height: '100%',
//     width: 110,
//     marginRight: -18,
//     marginLeft: -8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   storyImageBox: {
//     width: 68,
//     height: 68,
//     backgroundColor: 'white',
//     borderWidth: 1.8,
//     borderRadius: 100,
//     borderColor: '#c13584',
//     justifyContent: 'center',
//     alignItems: 'center',

//     // width: '80%',
//     // height: '75%',
//   },
//   storyImage: {
//     // resizeMode: 'cover',
//     // width: '92%',
//     // height: '92%',
//     // borderRadius: 100,
//     // backgroundColor: 'orange',
//     // padding: 10,
//     borderRadius: 100 / 2,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   storyName: {
//     textAlign: 'center',
//     color: 'white',
//     marginTop: 2,
//     fontSize: 12,
//   },
// });
