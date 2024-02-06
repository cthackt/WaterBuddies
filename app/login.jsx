import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from './features/authSlice';
import { toast } from 'react-toastify'

const styles = StyleSheet.create({
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
   },
});

export default Login = () => {

   // Local state variables
   const [email, setEmail] = useState('cthackt@gmail.com');
   const [password, setPassword] = useState('12345');

   // global state variables
   const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

   // write to state
   const dispatch = useDispatch()
   const navigation = useNavigation()

   const handleLogin = async (userdata) => {
      // console.log(userdata)

      // try {
         dispatch(login(userdata))
      // } catch (error) {
         // console.error('Error:', error);
      // }
   }

   const handleLogout = () => {
      dispatch(reset())
   } 

   useEffect(() => {
      if (isError) {
         toast.error(message)
      }

      if (isSuccess || user !== null) {
         navigation.navigate('userDashboard')
      }

      // dispatch(reset)
   }, [user, isError, isSuccess, message, dispatch])

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

         <Button onPress={() => handleLogin({email: email, pw: password})} title='Login' />

         {isLoading ? <h1>Loading</h1> : null}
         {user === null ? <h4>Not logged in</h4> : <h4>Logged in: {JSON.stringify(user)}</h4>}

         {/* <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form> */}
      </SafeAreaView>
   )
}