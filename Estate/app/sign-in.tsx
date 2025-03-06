import { View, Text, ScrollView, Image, TouchableOpacity, Alert, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';

const SignIn = () => {

  const handelLogin = async () => {
    const result = await login();

    if(result){
      console.log('Login Success');
    } else {
      Alert.alert('Error' , 'Failed to login');
    }
  };


  return (
    // <SafeAreaProvider className='h-full w-full'>
    // <SafeAreaView className=' h-full flex-1' >
    //   <ScrollView
    //   className="bg-white h-screen" contentContainerClassName=' flex-grow'>
    //     <Image source={images.onboarding} className="w-full h-4/6" resizeMode='contain' />

    //     <View className="px-10">
    //       <Text className="text-base text-center uppercase font-rubik-medium text-black-100">Welcome to Restate</Text>

    //       <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">Let's Get You Closer to {"\n"}
    //         <Text className="text-primary-300">Your Ideal Home</Text>
    //       </Text>

    //       <Text className="text-lg font-rubik-semibold text-black-100 text-center mt-12">
    //         Login to ReState with Googlee
    //       </Text>

    //       <TouchableOpacity onPress={handelLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full">
    //         <View className="flex flex-row items-center justify-center">
    //           <Image 
    //             source={icons.google}
    //             className="w-5 h-5"
    //             resizeMode="contain"
    //           />
    //           <Text className="text-lg font-rubik-medium text-black-300 text-center ml-2">
    //             Continue with Google
    //           </Text>
    //         </View>
    //       </TouchableOpacity>

    //     <Text className='text-3xl'>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum.
    //     </Text>
         
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    // </SafeAreaProvider>


        <SafeAreaView className='flex-1 ' edges={['top']}>
          <ScrollView className='bg-white pt-8'>
          <Image source={images.onboarding} className="w-full h-2/6" resizeMode='contain' />

          <View className="px-10">
           <Text className="text-base text-center uppercase font-rubik text-black-100">Welcome to Restate</Text>

           <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">Let's Get You Closer to {"\n"}
             <Text className="text-primary-300">Your Ideal Home</Text>
           </Text>

            <Text className="text-lg font-rubik-semibold text-black-100 text-center mt-12">
             Login to ReState with Googlee
           </Text>

           <TouchableOpacity onPress={handelLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full">
             <View className="flex flex-row items-center justify-center">
               <Image 
                 source={icons.google}
                 className="w-5 h-5"
                 resizeMode="contain"
               />
               <Text className="text-lg font-rubik-medium text-black-300 text-center ml-2">
                 Continue with Google
               </Text>
             </View>
           </TouchableOpacity>

         </View>

            <Text className='text-6xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </SafeAreaView>
  )
}


export default SignIn