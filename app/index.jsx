import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LotsOfStyles from '../components/LotsOfStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flexample from '../components/Flexample';
import PressMe from '../components/Pressable';
import { Link } from 'expo-router';
import users from '../users.json'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <FlatList
        data={users}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <Card item={item} />}
      />
    </>

    // <NavigationContainer>
    //   {/* <View style={styles.container}>
    //     <StatusBar style="auto" />
    //     <Text>App</Text>
    //     <LotsOfStyles />
    //     <Button onPress={handleTouch} title="Greet"/>
    //   </View> */}
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'WATER BUDDIES!!!' }}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     <Stack.Screen name="Flexample" component={Flexample} />
    //     <Stack.Screen name="PressMe" component={PressMe} />
    //     <Stack.Screen name="LotsOfStyles" component={LotsOfStyles} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const Card = ({ item }) => {
  return (
    <>
      <Link href={`/${item.name}`} asChild>
        <Pressable style={styles.navbutton}>
          <Text>{item.name}</Text>
        </Pressable>
      </Link>
    </>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Button
        title="Go to Cas's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Cas' })
        }
      />
      <Button
        title="Go to Flexample"
        onPress={() =>
          navigation.navigate('Flexample')
        }
      />
      <Button
        title="Go to Pressable example"
        onPress={() =>
          navigation.navigate('PressMe')
        }
      />
      <Button
        title="Go to Pressable example"
        onPress={() =>
          navigation.navigate('PressMe')
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  navbutton: {
    backgroundColor: 'lightgray',
    padding: 30,
  },
});