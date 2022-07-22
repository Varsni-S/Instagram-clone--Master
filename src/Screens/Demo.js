import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Demo() {
  useEffect(() => {
    createChannels();
  });

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const handleNotification = () => {
    //  PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: ' Post added',
      message: 'posted in home page',
      color: 'red',
      date: new Date(Date.now() + 5 * 1000),
    });
  };
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
      <Button title="local Notification" onPress={handleNotification} />
    </View>
  );
}
