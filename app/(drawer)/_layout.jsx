import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import {
  EvilIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawer = (props) => {

    const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1 , backgroundColor: "#dde3fe" }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1 }}

      >
        <View style={{padding:10 , flexDirection: 'column', alignContent: 'center' , alignItems: 'center' , rowGap: 10}}>
            <Image 
            style={{width: 100 , height: 100  , borderRadius:50}}
            source={require('@/assets/images/chatuser.png')}
            />
            <Text
            style={{ color: '#6473df'}}
            >Mohammad</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"LogOut"} />
      </DrawerContentScrollView>
      <View style={{
        borderTopColor: "#636363",
        borderTopWidth: 1 ,
        padding: 20 ,
        paddingBottom:20 + insets.bottom ,
      }}>
        <Text>Footer</Text>
      </View>
    </View>

    // <DrawerContentScrollView>
    //     <DrawerItem
    //     icon={({color , size}) => (<Feather name="list" size={size} color={color} />)}
    //     label={'Feed'}
    //     onPress={() => router.push('/(drawer)/(tabs)/feel')}
    //     />
    //     <DrawerItem
    //     icon={({color , size}) => (<EvilIcons name="user" size={size} color={color} />)}
    //     label={'Profile'}
    //     onPress={() => router.push('/(drawer)/(tabs)/profile')}
    //     />
    //     <DrawerItem
    //     icon={({color , size}) => (<MaterialIcons name="favorite-border" size={size} color={color} />)}
    //     label={'Favourit'}
    //     onPress={() => router.push('/favourites')}
    //     activeTintColor='#fff'
    //     activeBackgroundColor='#000'
    //     inactiveTintColor='#000'
    //     focused={props.state.index === 0}
    //     labelStyle={{
    //         fontSize: 16,
    //     }}

    //     />
    //     <DrawerItem
    //     icon={({color , size}) => (<Ionicons name="settings-outline" size={size} color={color} />)}
    //     label={'Setting'}
    //     onPress={() => router.push('/settings')}
    //     activeTintColor='#fff'
    //     activeBackgroundColor='#000'
    //     inactiveTintColor='#000'
    //     focused={props.state.index === 0}
    //     labelStyle={{
    //         fontSize: 16,
    //     }}
    //     />
    // </DrawerContentScrollView>
  );
};

export default function DrowLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: "#5363df",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#000",
          drawerLabelStyle: {fontSize: 16},
          drawerItemStyle:{borderRadius: 5 ,},
          headerStyle: {
            backgroundColor: "#636363" ,
          },
          headerTitleStyle:{
            color: '#fff',
          },
          headerTitleAlign: "center" ,
          headerTintColor: "#fff",
          
        }}
      >
        <Drawer.Screen
          name="favourites"
          options={{
            drawerLabel: "Favouri",
            headerTitle: "My Favourit",
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="favorite-border" size={size} color={color} />
            ),
            headerLeft: () => <DrawerToggleButton tintColor="#fff"  />
          }}
        />

        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Setting",
            headerTitle: "My Setting",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
            headerLeft: () => <DrawerToggleButton tintColor="#fff" />
          }}
        />

        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Profile",
            headerTitle: "My Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
            //headerLeft: () => <DrawerToggleButton />
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
