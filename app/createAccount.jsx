import React from "react";
import { Text, View, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';

export default CreateAccount = () => {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [name, setName] = React.useState('');

   const styles = StyleSheet.create({
      input: {
         height: 40,
         margin: 12,
         borderWidth: 1,
         padding: 10,
      },
   });

   return (
      <SafeAreaView>
         <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="name"
         />
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
         <Button onPress={() => handleCreateAccount(name, email, password)} title='Create account' />
      </SafeAreaView>
   )
}

const handleCreateAccount = async (name, email, pw) => {
   try {
      const response = await fetch("http://localhost:5000/api/users/", {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: name,
            email: email,
            password: pw,
          }),
      });

      if (!response.ok) {
         throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json);
   } catch (error) {
      console.error('Error:', error);
   } 
}