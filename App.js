import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Fontes personalizadas
import { HoltwoodOneSC_400Regular } from "@expo-google-fonts/holtwood-one-sc";
import { IstokWeb_400Regular } from "@expo-google-fonts/istok-web";

// Telas
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    HoltwoodOneSC_400Regular,
    IstokWeb_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Aguarda o carregamento das fontes
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
