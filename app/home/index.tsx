import { Link } from 'expo-router'
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>

        <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Ajustes</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
