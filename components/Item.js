import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Item(props) {
  const [product, setProduct, getProduct] = useState(null);

  async function getData(data) {
    console.log(data);
    try {
      fetch(`https://fr.openfoodfacts.org/api/v0/produit/${data}.json`)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 1) {
            setProduct(responseJson);

            console.log(
              "responseJson : " + responseJson + " product : " + product
            );
            addToStorage();
          } else {
            throw new Error("Code bar invalide");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function addToStorage() {
    if (product != null) {
      try {
        const value = await AsyncStorage.getItem("@store");
        let _tmp = product;
        if (value !== null) {
          let array = JSON.parse(value);
          _tmp.scanDate = new Date().toLocaleDateString();
          array.push(_tmp);
          try {
            await AsyncStorage.setItem("@store", JSON.stringify(array));
          } catch (error) {
            console.log(error);
          }
        } else {
          let array = Array();
          _tmp.scanDate = new Date().toLocaleDateString();
          array.push(_tmp);
          try {
            await AsyncStorage.setItem("@store", JSON.stringify(array));
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
      console.log("j'suis dans laaddd baby");
    }
  }

  useEffect(() => {
    if (product == null && props.route.params.new == true) {
      getData(props.route.params.code);
    }
  }, []);

  return (
    <View>
      {product === null ? (
        <View style={sLoading.container}>
          <Text style={sLoading.text}> Chargement </Text>
        </View>
      ) : (
        <View style={sItem.container}>
          <Image
            style={sItem.img}
            source={{
              uri: product.product.image_url,
            }}
          />
          <Text
            style={{
              marginTop: 24,
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 16,
              marginBottom: 10,
            }}
          >
            Informations
          </Text>
          <Text style={sItem.title}>{product.product.product_name}</Text>
          {product.product.product_additives_n !== undefined ? (
            <Text style={sItem.subtitle}>
              Additifs : {product.product.product_additives_n}
            </Text>
          ) : null}

          {product.product.nutriments.energy !== undefined ? (
            <Text style={sItem.subtitle}>
              Calories : {product.product.nutriments.energy} kCal
            </Text>
          ) : null}

          {product.product.nutriments.sugars !== undefined ? (
            <Text style={sItem.subtitle}>
              Sucre : {product.product.nutriments.sugars} g
            </Text>
          ) : null}
          {product.product.nutriments.salt !== undefined ? (
            <Text style={sItem.subtitle}>
              Sel : {product.product.nutriments.salt} g
            </Text>
          ) : null}
          {product.product.nutriments.fat !== undefined ? (
            <Text style={sItem.subtitle}>
              Gras : {product.product.nutriments.fat} g
            </Text>
          ) : null}
          {product.product.nutriments.proteins !== undefined ? (
            <Text style={sItem.subtitle}>
              Proteines : {product.product.nutriments.proteins} g
            </Text>
          ) : null}
          {product.product.nutriments.fiber !== undefined ? (
            <Text style={sItem.subtitle}>
              Fibres : {product.product.nutriments.fiber} g
            </Text>
          ) : null}
        </View>
      )}
    </View>
  );
}
const sLoading = StyleSheet.create({
  container: { flex: 1 },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const sItem = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 10,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 26,
    marginHorizontal: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    resizeMode: "contain",
  },
});
