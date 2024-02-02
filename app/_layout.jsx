import { Stack } from "expo-router"
import { createContext, useContext } from "react"

export default RootLayout = () => {

   const AuthContext = createContext()

   return (
      <Stack>
         <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      </Stack>
   )
}