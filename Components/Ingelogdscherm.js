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
import axios from "axios";

export default function Ingelogdscherm() {
  const [name, Setname] = useState("");
  const [quote, Setquote] = useState("");
  const [author, Setauthor] = useState("");
  async function getQuote() {
    var res = await axios.get("http://192.168.190.101:8080/quote");
    const quote = res.data[0].quote;
    const author = res.data[0].author;
    Setauthor(author);
    Setquote(quote);
  }
  async function getName() {
    var name = await Securestore.getItemAsync("name");
    console.log(name);
    Setname(name);
  }
  console.log(quote);
  useEffect(() => {
    getName();
    getQuote();
  }, []);
  return (
    <View>
      <Text style={{ top: 100, left: 175, fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30, top: 100 }}>{quote}</Text>
      <Text style={{ fontSize: 30, top: 100 }}>
        {"\n"} -Author : {author}
      </Text>
    </View>
  );
}
