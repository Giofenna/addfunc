import React, {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import * as Securestore from "expo-secure-store";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Maakaccountscherm({ navigation }) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const styles = StyleSheet.create({
    Image: {
      aspectRatio: 59 / 41,
      height: 0.23947916666666666 * height,
      left: 0.10185185185185185 * width,
      top: 0.022916666666666665 * height,
    },

    Textboxtext: {
      left: 0.10185185185185185 * width,
      top: 0.005729166666666666 * height,
      zIndex: 1,
      color: "grey",
    },

    Textinput: {
      backgroundColor: "#F8F4F4",
      borderRadius: 15,
      borderWidth: 1,
      bottom: 0.022916666666666665 * height,
      height: 0.06874999999999999 * height,
      left: 0.0636574074074074 * width,
      paddingHorizontal: 0.03819444444444444 * width,
      paddingTop: 0.011458333333333333 * height,
      width: 0.8912037037037036 * width,
    },

    Textinputlinker: {
      backgroundColor: "#F8F4F4",
      borderRadius: 15,
      borderWidth: 1,
      bottom: 0.022916666666666665 * height,
      height: 0.06874999999999999 * height,
      left: 0.0636574074074074 * width,
      paddingHorizontal: 0.03819444444444444 * width,
      paddingTop: 0.011458333333333333 * height,
      width: 0.4074074074074074 * width,
    },

    Textinputtexthalf: {
      left: 0.5601851851851851 * width,
      bottom: 0.0859375 * height,
      zIndex: 1,
      color: "grey",
    },

    Textinputrechter: {
      backgroundColor: "#F8F4F4",
      borderWidth: 1,
      borderRadius: 15,
      width: 0.4074074074074074 * width,
      height: 0.06874999999999999 * height,
      left: 0.5092592592592592 * width,
      bottom: 0.11458333333333333 * height,
      paddingHorizontal: 0.05092592592592592 * width,
      paddingTop: 0.011458333333333333 * height,
    },

    Textinputtext2: {
      left: 0.10185185185185185 * width,
      bottom: 0.0859375 * height,
      zIndex: 1,
      color: "grey",
    },

    Textinput2: {
      backgroundColor: "#F8F4F4",
      borderRadius: 15,
      borderWidth: 1,
      bottom: 0.11458333333333333 * height,
      height: 0.06874999999999999 * height,
      left: 0.0636574074074074 * width,
      paddingHorizontal: 0.03819444444444444 * width,
      paddingTop: 0.011458333333333333 * height,
      width: 0.8912037037037036 * width,
    },

    TouchableOpacity: {
      position: "absolute",
      zIndex: 1,
      width: 0.8912037037037036 * width,
    },

    Buttontext: {
      position: "absolute",
      fontWeight: "bold",
      zIndex: 1,
      top: 0.7791666666666667 * height,
      left: 0.07638888888888888 * width,
      borderRadius: 15,
      paddingHorizontal: 0.29282407407407407 * width,
      paddingVertical: 0.011458333333333333 * height,
      fontSize: 25,
      backgroundColor: "#61CBB4",
      color: "white",
    },

    Login: {
      zIndex: 1,
      position: "absolute",
      top: 0.859375 * height,
      left: 0.6365740740740741 * width,
    },

    Alreadyaccount: {
      top: 0.075625 * height,
      left: 0.2037037037037037 * width,
      fontWeight: "bold",
      zIndex: 1,
    },
  });
  const [key, Setkey] = useState("testkey");
  const [value, Setvalue] = useState("testvalue");
  Securestore.setItemAsync("key", "value");

  return (
    <View>
      <KeyboardAvoidingView behavior="position">
        <Pressable onPress={Keyboard.dismiss}>
          <Pressable
            onPress={async () =>
              console.log(await Securestore.getItemAsync("key"))
            }
          >
            <Image
              source={require("../assets/myeducationlifestylelogo.png")}
              style={styles.Image}
            ></Image>
          </Pressable>
          <Text style={styles.Textboxtext}>Full name</Text>
          <TextInput style={styles.Textinput}></TextInput>
          <Text style={styles.Textboxtext}>Country</Text>
          <TextInput style={styles.Textinputlinker}></TextInput>
          <Text style={styles.Textinputtexthalf}>City</Text>
          <TextInput style={styles.Textinputrechter}></TextInput>
          <Text style={styles.Textinputtext2}>Birth date</Text>
          <TextInput style={styles.Textinput2}></TextInput>
          <Text style={styles.Textinputtext2}>Email</Text>
          <TextInput style={styles.Textinput2}></TextInput>
          <Text style={styles.Textinputtext2}>Password</Text>
          <TextInput style={styles.Textinput2}></TextInput>
          <TouchableOpacity
            onPress={() => console.log("test")}
            style={styles.TouchableOpacity}
          >
            <Text style={styles.Buttontext}>Sign up!</Text>
          </TouchableOpacity>
          <Text style={styles.Alreadyaccount}>Already have an account?</Text>
          <Pressable
            style={styles.Login}
            onPress={() => navigation.navigate("Loginscherm")}
          >
            <Text style={{ color: "#61CBB4" }}>Login!</Text>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}
