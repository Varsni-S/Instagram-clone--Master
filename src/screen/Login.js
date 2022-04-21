import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../Navigators/AuthProvider';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  GoogleSignin.configure({
    webClientId:
      '619706230000-1op90ql55uj89nd9qduapbuerves6sme.apps.googleusercontent.com',
  });

  const signInWithGoogleAsyn = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(user => {
        const UserName = user.additionalUserInfo.profile.given_name;
        Alert.alert('Welcome! ' + UserName, 'Ready to Explore', [
          {text: 'Lets Go'},
        ]);
      })
      .catch(error => {
        console.log(error);
      });
  };
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
      </View>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <Button title="Log in" onPress={() => login(email, password)} />
        <Text style={styles.text}>OR</Text>
        <Button
          title="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={signInWithGoogleAsyn}
        />
      </View>
      <View style={styles.button}>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
  text: {
    marginLeft: 140,
    padding: 10,
  },
  forgotButton: {
    marginLeft: 120,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

// <View>
//   <Text>Login</Text>
//   <Button title="Home Screen" onPress={() => navigation.navigate('Home')} />
// </View>
