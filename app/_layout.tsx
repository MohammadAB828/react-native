import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home" ,
          headerStyle: {
            backgroundColor: "#636363" ,
            
          },
          headerTitleStyle:{
            color: '#fff',
          },
          headerTitleAlign: "center" ,
        }}
      />
    </Stack>
  );
}
