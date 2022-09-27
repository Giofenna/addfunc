import React, { Text, TextInput, View } from "react-native";


export default function Pagina2(){
   return(
   <View>
<Text style={{margin:10}}>Log in met je gegevens</Text>
<TextInput placeholder="Email" style={{borderWidth:1, borderStyle:"solid", margin:5}}></TextInput>
<TextInput placeholder="Wachtwoord" style={{borderWidth:1, borderStyle:"solid", margin:5}}></TextInput>
   </View>) 
}