import * as Securestore from "expo-secure-store";
import { decode } from "react-native-pure-jwt";
import React, {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Keyboard,
} from "react-native";

import { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Ingelogdscherm() {
  const [name, Setname] = useState("");
  async function namefunction() {
    var name = await Securestore.getItemAsync("name");
    console.log(name);
    Setname(name);
  }
  useEffect(() => {
    namefunction();
  }, []);
  return (
    <View>
      <Text style={{ top: 100, left: 175 }}>{name}</Text>
    </View>
  );
}
