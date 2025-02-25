import { Stack } from "expo-router";
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: "#636363" ,
      },
      headerTitleStyle:{
        color: '#fff',
      },
      headerTitleAlign: "center" ,
      
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home" ,
          
        }}
      />
    </Stack>
  );
}
