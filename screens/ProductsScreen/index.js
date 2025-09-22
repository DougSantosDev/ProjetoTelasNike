import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoNike from "../../assets/logo_nike.svg";
import shareIcon from "../../assets/share_icon.png";
import cartIcon from "../../assets/shopping_bag_icon.png";

const { width } = Dimensions.get("window");

const produtos = [
  {
    id: "1",
    nome: "KYRIE INFINITY",
    categoria: "Calçados para Basquete",
    preco: "799",
    descricao:
      "Tênis ideal para basquete, conforto e estilo para suas jogadas.",
    img: require("../../assets/thumb_tennis_1.png"),
  },
  {
    id: "2",
    nome: "Nike Air Force",
    categoria: "Tênis Casuais",
    preco: "599",
    descricao:
      "Tênis casual confortável para o dia a dia com estilo clássico da Nike.",
    img: require("../../assets/thumb_tennis_2.png"),
  },
  {
    id: "3",
    nome: "Nike Pegasus",
    categoria: "Tênis de Corrida",
    preco: "699",
    descricao:
      "Ideal para corridas e treinos, com amortecimento e leveza de alta performance.",
    img: require("../../assets/thumb_tennis_3.png"),
  },
];

export default function ProductsScreen() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(produtos[0]);
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
        <LogoNike width={70} height={35} />
        <TouchableOpacity>
          <Image
            source={{ uri: "https://i.pravatar.cc/50" }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      {/* CARROSSEL */}
      <FlatList
        data={produtos}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.thumbBox,
              produtoSelecionado.id === item.id && styles.thumbSelected,
            ]}
            onPress={() => setProdutoSelecionado(item)}
          >
            <Image source={item.img} style={styles.thumb} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      />

      {/* PRODUTO DESTAQUE - SEM CAIXA */}
      <Image source={produtoSelecionado.img} style={styles.mainImage} />

      {/* DETALHES DO PRODUTO */}
      <Text style={styles.nome}>{produtoSelecionado.nome}</Text>
      <Text style={styles.categoria}>{produtoSelecionado.categoria}</Text>
      <Text style={styles.descricao}>{produtoSelecionado.descricao}</Text>

      <Text style={styles.precoLabel}>Preço</Text>
      <Text style={styles.preco}>R$ {produtoSelecionado.preco}</Text>

      {/* BOTÕES FLUTUANTES */}
      <Animated.View
        style={[styles.floatingButtons, { transform: [{ translateY: slideAnim }] }]}
      >
        <TouchableOpacity style={styles.actionButton}>
          <Image source={shareIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.cartButton]}>
          <Image source={cartIcon} style={styles.icon} />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  menu: { fontSize: 26, fontWeight: "bold", color: "#000" },
  avatar: { width: 40, height: 40, borderRadius: 50 },

  carousel: { marginBottom: 20, paddingVertical: 8 },
  thumbBox: {
    marginRight: 12,
    padding: 6,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  thumbSelected: {
    backgroundColor: "#FFE873",
    transform: [{ scale: 1.05 }],
  },
  thumb: { width: 55, height: 55, resizeMode: "contain" },

  mainImage: {
    width: width * 0.65,
    height: width * 0.65,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },

  nome: { fontSize: 22, fontWeight: "bold", color: "#144273", marginBottom: 4 },
  categoria: { fontSize: 15, fontWeight: "600", color: "#444" },
  descricao: { fontSize: 14, color: "#555", marginVertical: 10, lineHeight: 20 },

  precoLabel: { fontSize: 16, fontWeight: "bold", color: "#144273" },
  preco: { fontSize: 26, fontWeight: "bold", color: "#144273", marginBottom: 20 },

  floatingButtons: {
    position: "absolute",
    bottom: 30,
    right: 20,
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
  },
  cartButton: { backgroundColor: "#2ED982" },
  icon: { width: 22, height: 22, tintColor: "#fff" },
});
