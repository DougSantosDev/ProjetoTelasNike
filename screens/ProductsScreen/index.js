import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const produtos = [
  { id: "1", nome: "Nike Air Zoom", preco: "R$ 599,90", img: require("../../assets/thumb_tennis_1.png") },
  { id: "2", nome: "Nike Revolution", preco: "R$ 399,90", img: require("../../assets/thumb_tennis_2.png") },
  { id: "3", nome: "Nike Pegasus", preco: "R$ 699,90", img: require("../../assets/thumb_tennis_3.png") },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  image: { width: 70, height: 70, resizeMode: "contain", marginRight: 10 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: "bold" },
  preco: { fontSize: 14, color: "gray" },
  button: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});