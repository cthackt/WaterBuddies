import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Button } from 'react-native';

export default Login = () => {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');

   return (
      <SafeAreaView>
         <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="email"
         />
         <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
         />
         <Button onPress={() => console.log(email, password)} title='Login' />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
});