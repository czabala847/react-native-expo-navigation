import { CustomButton } from "@/components/shared/CustomButton"
import { products } from "@/store/products.store"
import { router } from "expo-router"
import React from "react"
import { FlatList, Text, View } from "react-native"

const ProductsScreen = () => {
  return (
    <View className="flex flex-1">
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <CustomButton
                className="text-primary"
                onPress={() => router.push(`/(stack)/products/${item.id}`)}
              >
                Ver detalle
              </CustomButton>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
