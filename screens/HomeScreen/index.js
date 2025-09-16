import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#38EF77', '#11998e']} // gradiente do verde claro pro verde escuro
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image source={require("../../assets/logo_nike.svg")} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Encontre os melhores tênis aqui!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  logo: { 
    width: 120, 
    height: 60, 
    resizeMode: "contain", 
    marginBottom: 20 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#fff" // texto branco pra ficar visível no gradiente
  },
  subtitle: { 
    fontSize: 16, 
    color: "#f0f0f0", // subtítulo suave
    marginBottom: 40 
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
});
