import { Stack, useRouter } from "expo-router";
import '@/global.css';
import { Button, Text } from "react-native";

export default function RootLayout() {

      const router = useRouter();
  

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: "#636363" ,
      },
      headerTitleStyle:{
        color: '#fff',
      },
      headerTitleAlign: "center" ,
      headerTintColor: "#fff"
      
    }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home" ,
          headerRight: () => <Text className=" text-white" onPress={() => router.push('contact')} >Contact</Text>
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About" ,
          
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerTitle: "Contact" ,
          presentation: "modal"
        }}
      />

      <Stack.Screen
        name="blog/index"
        options={{
          headerTitle: "Blog" ,
          
        }}
      />
      <Stack.Screen
        name="(drawer)"
        options={{
          headerShown: false,
          
        }}
      />
    </Stack>
  );
}
