import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Toplam Satış Tutarı",
    value: "100,000,00₺",
  },
  {
    id: "2",
    title: "Toplam Alış Tutarı",
    value: "-100,000,00₺",
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardValue}>{item.value}</Text>
    <View style={styles.cardButtons}>
      <Text style={styles.buttons}>Görüntüle</Text>
    </View>
  </View>
);

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  const filteredData = DATA.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Ara..."
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 26,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 25,
  },
  cardButtons: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: 10,
    opacity: 0.6,
  },
  buttons: {
    backgroundColor: "green",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
  },
});

export default SearchScreen;
