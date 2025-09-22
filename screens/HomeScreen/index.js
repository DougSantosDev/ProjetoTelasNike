import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LogoNike from "../../assets/logo_nike.svg"; // seu SVG
import Tennis2 from "../../assets/tennis_2.png"; // imagem do tênis

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#2ED982", "#14A08D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Logo no canto superior esquerdo */}
      <View style={styles.header}>
        <LogoNike width={60} height={30} />
      </View>

      {/* Imagem do tênis centralizada */}
      <View style={styles.imageContainer}>
        <Image source={Tennis2} style={styles.tennis} resizeMode="contain" />
      </View>

      {/* Textos */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>SUMMER</Text>
        <Text style={styles.title}>COLLECTIONS</Text>
        <Text style={styles.year}>2022</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque vitae porta ante. Suspendisse a massa vitae justo 
          lacinia accumsan.
        </Text>
      </View>

      {/* Botão ocupando toda a largura no rodapé */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  tennis: {
    width: 300,
    height: 220,
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "#144273",
    fontFamily: "HoltwoodOneSC_400Regular",
  },
  year: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "HoltwoodOneSC_400Regular",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#f0f0f0",
    fontFamily: "IstokWeb_400Regular",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F2C94C",
    paddingVertical: 16,
    borderRadius: 30,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#144273",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "IstokWeb_400Regular",
  },
});
