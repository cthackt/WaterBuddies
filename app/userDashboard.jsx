import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logout, reset} from './features/authSlice';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({

});

export default function userDashboard() {
  
   const user = useSelector((state) => state.auth.user)
  
   const dispatch = useDispatch()
   const nav = useNavigation()
   const handleLogout = () => {
      nav.navigate('index')
      dispatch(logout())
      dispatch(reset())
   }

   return (
    <SafeAreaView>
      <Text>Hello {user.name}!</Text>
      <Button onPress={() => handleLogout()} title='Log out' />
    </SafeAreaView>
  )
}
