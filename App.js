import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LotsOfStyles from './components/LotsOfStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flexample from './components/Flexample';
import PressMe from './components/Pressable';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>App</Text>
        <LotsOfStyles />
        <Button onPress={handleTouch} title="Greet"/>
      </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'WATER BUDDIES!!!' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Flexample" component={Flexample} />
        <Stack.Screen name="PressMe" component={PressMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
      <Button
        title="Go to Cas's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Cas'})
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
    </>
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const handleTouch = () => {
  alert("Hello")
}

