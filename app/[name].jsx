import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { Stack } from 'expo-router';

export default UserPage = () => {

   const params = useLocalSearchParams()
   const user = users.find((user) => user.name === params.name)

   if (!user) {
      return (
         <>
            <View style={styles.container}>
               <Text>User not found...</Text>
            </View>
         </>
      )
   }

   return (
      <>

         <View style={styles.container}>
            <Stack.Screen options={{ title: user.name }} />
            <Text style={styles.title}>
               {user.name}
            </Text>
            <Text style={styles.text}>
               {user.email}
            </Text>
            <Text style={styles.text}>
               {user.age}
            </Text>
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 50,
      gap: 20
   },
   title: {
      textAlign: "center",
      fontSize: 40
   },
   text: {
      textAlign: "center",
      fontSize: 20
   }
})