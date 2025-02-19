/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import React from "react";
 import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
 
 const IMAGE_WIDTH = 150;
 const IMAGE_HEIGHT = 150;
 
 const ImageList = ({ images, shift = 0, onPress }) => (
   <ScrollView
     horizontal
     style={styles.root}
     contentOffset={{ x: shift * IMAGE_WIDTH, y: 0 }}
     contentContainerStyle={styles.container}
   >
     {images.map((imageUrl, index) => (
       <TouchableOpacity
         style={styles.button}
         key={`${imageUrl}_${index}`}
         activeOpacity={0.8}
         onPress={() => onPress(index)}
       >
         <Image source={{ uri: imageUrl }} style={styles.image} />
       </TouchableOpacity>
     ))}
   </ScrollView>
 );
 
 const styles = StyleSheet.create({
   root: { flexGrow: 0 },
   container: {
     flex: 0,
     paddingLeft: 10,
     marginBottom: 10
   },
   button: {
     marginRight: 10
   },
   image: {
     width: RFValue(IMAGE_WIDTH),
     height: RFValue(IMAGE_HEIGHT),
     borderRadius: 10
   }
 });
 
 export default ImageList;