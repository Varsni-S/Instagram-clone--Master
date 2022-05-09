// import {
//   View,
//   Text,
//   StyleSheet,
//   PermissionsAndroid,
//   Dimensions,
//   Button,
//   Platform,
//   Image,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import CameraRoll from '@react-native-community/cameraroll';
// export default function Demo() {
//   const [nodes, setNodes] = useState([]);
//   const [detailViewVisible, setDetailViewVisibility] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     checkPermission().then(() => {
//       getPhotos();
//     });
//   }, []);

//   const checkPermission = async () => {
//     const hasPermission = await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//     );
//     //console.log(hasPermission);
//     if (hasPermission) {
//       return true;
//     }
//     const status = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: 'Image gallery app permissions',
//         message: 'Image gallery needs your permission to access your photos',
//         buttonPositive: 'OK',
//       },
//     );
//     return status === 'granted';
//   };

//   //getPhotos
//   const getPhotos = async () => {
//     const photos = await CameraRoll.getPhotos({
//       first: 10,
//     });
//     console.log(photos, 'pic');
//     setNodes(photos.edges.map(edge => edge.node));
//     console.log(nodes, 'node');
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         backgroundColor: 'yellow',
//       }}>
//       <Text>Hrllo</Text>
//       {nodes.map((node, index) => (
//         <View
//           key={index}
//           style={{
//             height: 100,
//             minWidth: 100,
//             // flex: 1,
//           }}
//           onPress={() => {
//             setDetailViewVisibility(true);
//             setSelectedIndex(index);
//           }}>
//           <Image
//             style={{
//               height: '70%',
//               minWidth: '70%',
//               flex: 1,
//             }}
//             source={{
//               uri: node.image.uri,
//             }}
//           />
//         </View>
//       ))}
//     </View>
//   );
// }

import {View, Text} from 'react-native';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
}
