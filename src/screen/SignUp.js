import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

import React, {useState, useContext} from 'react';
//import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigators/AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SignUp() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);
  return (
    <View>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Image
          source={require('../assests/Logo.png')}
          style={{width: 250, height: 90}}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder=" Username or Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Button title="Sign Up" onPress={() => register(email, password)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#888888',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    margin: 30,
  },
  text: {fontSize: 20, marginLeft: 80, padding: 50},
});
