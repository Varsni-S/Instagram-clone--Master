import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import React, {useState, useContext} from 'react';
//import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigators/AuthProvider';

export default function SignUp() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.text}>SignUp Page</Text>

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

        <Button title="Sign Up" onPress={() => register(email, password)} />
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
