import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Item from "./Item";

export default function List({ items, onPressItem }) {
  // Constantes, fonctions & variables
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={onPressItem} />;
  };

  // Display
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
