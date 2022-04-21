import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import LoginNavigation from './LoginNavigation';
import {Button} from 'react-native';
import MainHomeNavigation from './MainHomeNavigation';
export default function Route() {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {!user ? (
        <LoginNavigation />
      ) : (
        <>
          <MainHomeNavigation />
        </>
      )}
    </NavigationContainer>
  );
}
