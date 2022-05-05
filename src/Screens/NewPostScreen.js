import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addPost} from '../redux/action';

export default function NewPostScreen({route}) {
  const {data: arrayData} = useSelector(state => state.mainReducer);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const productId = route.params.image1?.path;

  const [data, setData] = useState({
    id: arrayData.length + 1,
    imageUrl: productId,
    profileName: 'Varsni',
    time: 'now',
    likes: '0 Likes',
  });

  //console.log(arrayData.length, 'aarrr');
  // console.log(arrayData.length, 'data', productId);
  //console.log(route.params.image1, 'newPost');
  // console.log(productId);
  // console.log('img' + productId);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      {/* header */}
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1624887009213-040347b804c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',
          }}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
        <TextInput
          placeholder="Write Caption"
          placeholderTextColor={'white'}
          style={{marginLeft: 10, color: 'white'}}
          onChangeText={e =>
            setData(previousState => ({...previousState, contentText: e}))
          }
        />
        <TouchableOpacity
          style={{marginLeft: 200}}
          onPress={() =>
            dispatch(addPost(data), navigation.navigate('MainScreen'))
          }>
          <FontAwesomeIcon
            icon={faCheck}
            size={25}
            style={{color: '#3493D9'}}
          />
        </TouchableOpacity>
      </View>

      {/* uploading image */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.filterSelector}
          source={{
            uri: productId,
          }}
          resizeMode={'contain'}
        />
      </View>

      {/* footer */}
      <View style={{marginLeft: 25}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: -20,
          }}>
          {' '}
          Also Post To
        </Text>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={{color: 'white', fontSize: 15, marginRight: 220}}>
            FaceBook
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={{color: 'white', fontSize: 15, marginRight: 240}}>
            Twitter
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterSelector: {
    width: 250,
    height: 400,
    marginBottom: 40,
  },
});
