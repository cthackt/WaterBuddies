import { Stack } from "expo-router"

export default RootLayout = () => {

   const AuthContext = createContext()
   const [token, setToken] = useState('')

   return (
      <Stack>
         <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      </Stack>
   )
}