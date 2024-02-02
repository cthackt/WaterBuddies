import { Stack } from "expo-router"
import { createContext, useContext, useState } from "react"

export default RootLayout = () => {

   const AuthContext = createContext()
   const [token, setToken] = useState('')

   return (
      <AuthContext value={{ token, setToken}}>
         <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
         </Stack>
      </AuthContext>
   )
}