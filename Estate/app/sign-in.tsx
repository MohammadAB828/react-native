import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { userGlobalContext } from '@/lib/global-provider';

const SignIn = () => {

  const { refetch , loading , isLoggedIn} = userGlobalContext();

  const handelLogin = async () => {
    const result = await login();

    if(result){
      console.log('Login Success');
    } else {
      Alert.alert('Error' , 'Failed to loginnn');
    }
  };


  return (
   
        <SafeAreaView className='flex-1 h-full' edges={['top']}>
          <ScrollView className='bg-white pt-8'
          contentContainerClassName='h-full'>
          <Image source={images.onboarding} className="w-full h-4/6" resizeMode='contain' />

          <View className="px-10">
           <Text className="text-base text-center uppercase font-rubik text-black-100">Welcome to Restate</Text>

           <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">Let's Get You Closer to {"\n"}
             <Text className="text-primary-300">Your Ideal Home</Text>
           </Text>

            <Text className="text-lg font-rubik-semibold text-black-100 text-center my-6">
             Login to ReState with Google
           </Text>

           <TouchableOpacity onPress={handelLogin} className="bg-white shadow-lg shadow-zinc-500 rounded-full w-full py-3">
             <View className="flex flex-row items-center justify-center">
               <Image 
                 source={icons.google}
                 className="w-5 h-7"
                 resizeMode="contain"
               />
               <Text className="text-lg font-rubik-medium text-black-300 ml-3 text-center">
                 Sign Up with Google
               </Text>
             </View>
           </TouchableOpacity>
         </View>

          </ScrollView>
        </SafeAreaView>
  )
}


export default SignIn