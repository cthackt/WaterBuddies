import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Login = () => {

   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [token, setToken] = useState('')

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
         <Button onPress={() => handleLogin(email, password)} title='Login' />
      </SafeAreaView>
   )
}

const handleLogin = async (email, pw) => {
   const navigation = useNavigation()

   try {
      const response = await fetch("http://localhost:5000/api/users/login", {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email: email,
            password: pw,
          }),
      });

      if (!response.ok) {
         throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json.token);

      navigation.navigate('User'); 
   } catch (error) {
      console.error('Error:', error);
   } 
}

const styles = StyleSheet.create({
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
});