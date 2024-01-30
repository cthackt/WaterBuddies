import { React, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Flexample = () => {

   const orientation = 'column'

   return (
      <View
         style={[
            styles.container,
            {
               // Try setting `flexDirection` to `"row"`.
               flexDirection: orientation,
            },
         ]}>
         <View style={{ flex: 1, backgroundColor: 'red' }} />
         <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
         <View style={{ flex: 3, backgroundColor: 'green' }} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
});

export default Flexample;