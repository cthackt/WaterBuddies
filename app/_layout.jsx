import { Stack } from "expo-router"

export default RootLayout = () => {
   return (
      <Stack>
         <Stack.Screen name="index" options={{ title: "Users" }}></Stack.Screen>
      </Stack>
   )
}