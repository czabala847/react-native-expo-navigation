import React from "react"
import { SafeAreaView, Text, View } from "react-native"

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text style={{ fontFamily: "WorkSans-Black" }} className="text-3xl">
          App
        </Text>
        <Text className="text-3xl font-work-black text-primary">App</Text>
        <Text className="text-3xl font-work-light text-secondary">App</Text>
        <Text className="text-3xl font-work-medium text-tertiary">App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
