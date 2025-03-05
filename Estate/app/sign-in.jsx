import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handelLogin = () => {

  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode='contain' />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik-medium text-black-100">Welcome to Restate</Text>

          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik-semibold text-black-100 text-center mt-12">
            Login to ReState with Google
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn