import React, {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Securestore from "expo-secure-store";

export default function Welkomscherm({ navigation }) {
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;

  const styles = StyleSheet.create({
    Text1: {
      alignSelf: "center",
      position: "relative",
      color: "#61CBB4",
      fontSize: 30,
      top: 0.06874999999999999 * windowHeight,
      right: 0.2546296296296296 * windowWidth,
      zIndex: 1,
      margin: 10,
      fontWeight: "bold",
    },
    Text2: {
      alignSelf: "center",
      position: "relative",
      color: "#61CBB4",
      fontSize: 30,
      top: 0.06874999999999999 * windowHeight,
      right: 0.07384259259259258 * windowWidth,
      zIndex: 1,
      fontWeight: "bold",
    },
    Text3: {
      position: "absolute",
      fontWeight: "bold",
      zIndex: 1,
      top: 0.8479166666666667 * windowHeight,
      left: 0.07638888888888888 * windowWidth,
      borderRadius: 15,
      paddingHorizontal: 0.29282407407407407 * windowWidth,
      paddingVertical: 0.011458333333333333 * windowHeight,
      fontSize: 25,
      backgroundColor: "#61CBB4",
      color: "white",
    },
    Image: {
      resizeMode: "stretch",
      width: windowWidth,
      height: windowHeight,
      bottom: 0.11572916666666666 * windowHeight,
      zIndex: 0,
    },
    TouchableOpacity: {
      position: "absolute",
      zIndex: 1,
      width: 0.8912037037037036 * windowWidth,
    },
  });
  return (
    <View>
      <Text style={styles.Text1}>Welcome to</Text>

      <Text style={styles.Text2}>My Education Lifestyle</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Ebookscherm")}
        style={styles.TouchableOpacity}
      >
        <Text style={styles.Text3}>Proceed</Text>
      </TouchableOpacity>

      <Image
        source={require("./welkomscherm.png")}
        style={styles.Image}
      ></Image>
    </View>
  );
}
