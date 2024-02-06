import { Stack } from "expo-router"
import { Provider } from "react-redux"
import { store } from "./store"

export default RootLayout = () => {
   
   return (
      <Provider store={store}>
         <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
         </Stack>
      </Provider>
   )
}