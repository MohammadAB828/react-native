import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Text } from 'react-native';

export default function TabLayout() {

   

  return (
    <Tabs  screenOptions={{
        headerStyle: {
          backgroundColor: "#636363" ,
        },
        headerTitleStyle:{
          color: '#fff',
        },
        headerTitleAlign: "center" ,
        headerTintColor: "#fff",
        
      }}>
        <Tabs.Screen 
            name='feel'
            options={{
                tabBarIcon: ({color}) => (
                <Feather name="list" size={24} color={color} />
            ),
            tabBarLabel: "Feel",
            headerShown:false,
           
            }}
        />
        
        <Tabs.Screen 
            name='profile'
            options={{
                tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={24} color={color} />
            ),
            tabBarLabel: "Profile",
            headerTitle: "Profile",
            }}
        />
    </Tabs>
  )
}