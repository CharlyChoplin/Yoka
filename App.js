import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yoki</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text> SCANNER </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Six pack de bières</Text>
          <Text style={styles.contentBox}>Scan hier à 18h</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "lightgrey",
    paddingTop: 45,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderColor: "grey",
    padding: 20,
    margin: 20,
    borderWidth: 1,
  },
  textBox: {
    margin: 15,
  },
  titleBox: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contentBox: {
    fontSize: 18,
    color: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});
