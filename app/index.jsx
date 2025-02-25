import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-lg text-red-500 py-5">Home Page</Text>
      <Link className=" bg-cyan-300  px-5 rounded-lg py-1" href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
      <Link className=" bg-cyan-300 mt-10 px-5 rounded-lg py-1" href={"/blog"}>
        <Text>Go to Blog Page</Text>
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  LinkText: {
    backgroundColor: "blue",
    marginTop:5 ,
    color: "white" ,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical:5 ,
  }

});