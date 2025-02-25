import { View, Text } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
export default function Blog() {

    const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className='text-green-700'>Blog Page</Text>
      <Link className="text-cyan-400 my-3" href={'/blog/1'}>blog1</Link>
      <Link href={'/blog/2'} className=" text-cyan-500 my-3">blog2</Link>
      <Link className=" text-blue-500 my-3" href={'/blog/3?name=Ali'}>blog3</Link>
    </View>
  )
}