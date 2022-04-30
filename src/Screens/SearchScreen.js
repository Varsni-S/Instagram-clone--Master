import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import staticPosts from '../StaticDatas/Datas';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(staticPosts);
  const [error, setError] = useState('');

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.profileName
          ? item.profileName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData, 'filter');
      console.log(newData.length);
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
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <View style={styles.container}> */}

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
            marginTop: 100,
            fontSize: 18,
          }}>
          {error}
        </Text>
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
