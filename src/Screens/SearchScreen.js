import {
  faHeart,
  faMap,
  faMapMarker,
  faPaperPlane,
  faPlusCircle,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SearchContent from '../Components/Homescreen/SearchContent';
import staticPosts from '../StaticDatas/Datas';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(staticPosts);
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.profileName
          ? item.profileName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      // console.log(newData, 'filter');
      // console.log(newData.length);
      newData.length <= 0 ? setError('User Not Found!') : setError('');
      setFilteredDataSource(newData);

      setSearch(text);
    } else {
      setFilteredDataSource('');
      setError('');
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    console.log(item, 'item');
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.profileName.toUpperCase()}
      </Text>
    );
  };
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  const getItem = item => {
    // Function for click on an item
    alert('Hello ' + item.profileName + '!!!');
  };

  const getData = data => {
    setImage(data);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* search bar */}

      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search"
        placeholderTextColor="white"
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        ItemSeparatorComponent={ItemSeparatorView}
      />
      {error.length > 0 ? (
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 130,
            position: 'absolute',
            marginTop: 20,
            fontSize: 18,
          }}>
          {error}
        </Text>
      ) : null}

      {/* content to search */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size={40}
            style={{opacity: 0.5, color: 'white'}}
          />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymous_guy
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <FontAwesomeIcon icon={faHeart} size={20} />
              <FontAwesomeIcon icon={faUserCircle} size={20} />
              <FontAwesomeIcon icon={faPaperPlane} size={20} />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'grey',
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },

  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    color: 'white',
  },
});
