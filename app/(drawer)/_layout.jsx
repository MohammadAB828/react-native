import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { EvilIcons, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';


const CustomDrawer = (props) => {
    return(
        <DrawerContentScrollView>
            <DrawerItem
            icon={({color , size}) => (<Feather name="list" size={size} color={color} />)}
            label={'Feed'}
            onPress={() => router.push('/(drawer)/(tabs)/feel')}
            />
            <DrawerItem
            icon={({color , size}) => (<EvilIcons name="user" size={size} color={color} />)}
            label={'Profile'}
            onPress={() => router.push('/(drawer)/(tabs)/profile')}
            />
            <DrawerItem
            icon={({color , size}) => (<MaterialIcons name="favorite-border" size={size} color={color} />)}
            label={'Favourit'}
            onPress={() => router.push('/favourites')}
            activeTintColor='#fff'
            activeBackgroundColor='#000'
            inactiveTintColor='#000'
            labelStyle={{
                fontSize: 16,
            }}
            
            />
            <DrawerItem
            icon={({color , size}) => (<Ionicons name="settings-outline" size={size} color={color} />)}
            label={'Setting'}
            onPress={() => router.push('/settings')}
            activeTintColor='#fff'
            activeBackgroundColor='#000'
            inactiveTintColor='#000'
            labelStyle={{
                fontSize: 16,
            }}
            />
        </DrawerContentScrollView>
    )
}


export default function DrowLayout() {
  return (
   <GestureHandlerRootView  style={{ flex: 1 }}>
    <Drawer
    drawerContent={(props) => <CustomDrawer {...props}/>} 
    // screenOptions={{
    //     drawerActiveBackgroundColor: "#636363",
    //     drawerActiveTintColor: "#fff",
    //     drawerInactiveBackgroundColor: "#212121",
    // }}
    >
        <Drawer.Screen 
        name='favourites'
        options={{
            drawerInactiveBackgroundColor: "#000",
            drawerActiveBackgroundColor: "#636363",
            headerTitle: "Favourit",
        }}
        />
    </Drawer>
   </GestureHandlerRootView>
  )
}