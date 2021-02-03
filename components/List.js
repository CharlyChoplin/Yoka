import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import Item from "./Item";

export default function List({ items, onPressItem }) {
  // Constantes, fonctions & variables
  const [dataSource, setDatasource] = useState(null);

  async function getData() {
    await AsyncStorage.getItem("@store", (error, result) => {
      if (error !== null) {
        throw error;
      } else {
        setDatasource(JSON.parse(result));
      }
    });
  }

  useEffect(() => {
    getData();
  }, [dataSource]);

  // Display
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => item}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: item.product.selected_images.front.display.fr,
                }}
              />
              <View style={{ flex: 1, flexDirection: "column", marginTop: 8 }}>
                <Text
                  style={{
                    marginHorizontal: 8,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.product.product_name}
                </Text>
                <Text
                  style={{ marginHorizontal: 8, fontSize: 16, color: "gray" }}
                >
                  {item.product.brands_tags[0].charAt(0).toUpperCase() +
                    item.product.brands_tags[0].slice(1)}
                </Text>
                <View
                  style={{
                    marginTop: 0,
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {item.scanDate != null ? (
                    <Text style={styles.date}>Scanné le {item.scanDate}</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) =>
          item.code + Math.random().toString(36).substring(7)
        }
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
