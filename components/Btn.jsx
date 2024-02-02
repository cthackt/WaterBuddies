import React from "react";
import { SafeAreaView, Pressable, StyleSheet } from "react-native-safe-area-context";

const Btn = props => {

   const styles = StyleSheet.create({
      button: {
         backgroundColor: 'lightgray',
         height: '10vh',
         margin: 15,
         flex: 1,
         justifyContent: 'center',
      },
      text: {
         textAlign: 'center'
      }
   });

   return (
      <SafeAreaView>
         <Pressable style={[styles.button]}>
            <Text style={styles.text}>{props.text}</Text>
         </Pressable>
      </SafeAreaView>
   )
}

export default Btn