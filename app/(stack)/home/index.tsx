import { CustomButton } from "@/components/shared/CustomButton"
import { Link, router } from "expo-router"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>

        <Link href="/profile" asChild>
          <CustomButton className='mb-2'>Perfil</CustomButton>
        </Link>

        <CustomButton className='mb-2' onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        
        <CustomButton className='mb-2' onPress={() => router.push("/settings")}>
          Ajustes
        </CustomButton>

        {/* <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
