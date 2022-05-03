import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SearchContent = props => {
  const navigation = useNavigation();
  const searchData = [
    {
      id: 0,
      images: [
        require('../../assests/search/p1.jpg'),
        require('../../assests/search/p2.jpg'),
        require('../../assests/search/p3.jpg'),
        require('../../assests/search/p4.jpg'),
        require('../../assests/search/p5.jpg'),
        require('../../assests/users/butterfly.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../assests/search/p6.jpg'),
        require('../../assests/search/p7.jpg'),
        require('../../assests/search/p8.jpg'),
        require('../../assests/search/p9.jpg'),
        require('../../assests/search/p10.jpg'),
        require('../../assests/users/whitegirl.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../assests/search/p11.jpg'),

        require('../../assests/search/p15.jpg'),
        require('../../assests/search/p14.jpg'),
        require('../../assests/search/p13.jpg'),
        require('../../assests/search/p12.jpg'),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {/* id =0 */}
            {data.id === 0 ? (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  //   width:'100%'
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      onPress={() => navigation.push('SearchFeed')}
                      style={{paddingBottom: 5}}>
                      <Image
                        source={imageData}
                        style={{width: 129, height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {/* id 1*/}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '66.5%',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        style={{paddingBottom: 5}}
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={{marginLeft: 2, width: '100%'}}
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}>
                  <Image
                    source={data.images[5]}
                    style={{width: 200, height: 305}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}

            {/* id 2*/}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[4])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2, width: '90%'}}>
                  <Image
                    source={data.images[4]}
                    style={{width: 285, height: 305}}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginLeft: -23,

                    width: '66.5%',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{
                          paddingBottom: 2,
                          width: 300,
                        }}>
                        <Image
                          source={imageData}
                          style={{width: 152, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};
export default SearchContent;
