import React, { Text, View,Dimensions, Image,TouchableOpacity, Pressable, StyleSheet, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as Securestore from "expo-secure-store"

export default function Loginscherm({navigation}){
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;
    

const styles = StyleSheet.create({
    Image1:{aspectRatio:(59/41), height:(0.23947916666666666* height), left:(0.10185185185185185*width), top:(0.022916666666666665*height)}
    ,Text1:{fontWeight:"bold", left:(0.3310185185185185*width), fontSize:20}
    ,Image2:{aspectRatio:(73/15), height:(0.06874999999999999*height), left:(0.1273148148148148*width)}
    ,Textboxtext:{left:(0.1273148148148148*width), top:(0.028645833333333332*height), zIndex:1, color:"grey"}
    ,Textinput:{backgroundColor:"#F8F4F4", borderWidth:1, borderRadius:15, width:(0.8912037037037036*width), height:(0.06874999999999999*height), left:(0.0636574074074074*width), paddingHorizontal:(0.0636574074074074*width), paddingTop:(0.011458333333333333*height)}
    ,Buttontext:{position:"absolute" , fontWeight:"bold",zIndex:1, top:(0.5499999999999999*height), left:(0.07638888888888888*width), borderRadius:15, paddingHorizontal:(0.34375*width), paddingVertical:(0.011458333333333333*height), fontSize:25,backgroundColor:"#61CBB4", color:"white"}
    ,TouchableOpacity:{position:"absolute", zIndex:1, width:(0.8912037037037036*width)}
    ,Forgotpassword:{color:"#61CBB4", left:(0.35648148148148145*width), top:(0.11458333333333333*height)}
    ,Noaccount:{top:(0.31625*height), left:(0.22916666666666666*width), fontWeight:"bold"}
    ,Pressablestyle:{top:(0.859375*height), left:(0.611111111111111*width), color:"#61CBB4"}
})
    return(
    <View style={{backgroundColor:"white", width:width, height:height}}>
      <Pressable onPress={Keyboard.dismiss}> 
       <Pressable onPress={async()=>console.log(await Securestore.getItemAsync("key"))}><Image source={require("../assets/myeducationlifestylelogo.png")} style={styles.Image1}></Image></Pressable>
<Text style={styles.Text1}> Welcome to</Text>
<Image source={require("../assets/myeducationlifestyletext.png")} style={styles.Image2}></Image>
<Text style={styles.Textboxtext}>Email</Text>
<TextInput style={styles.Textinput}></TextInput>
<Text style={styles.Textboxtext}>Password</Text>
<TextInput style={styles.Textinput}></TextInput>
<TouchableOpacity onPress={()=>console.log("tesst")} style={styles.TouchableOpacity}>
    <Text style={styles.Buttontext}>Login</Text>
    </TouchableOpacity>
    <Text style={styles.Forgotpassword}>Forgot password?</Text>
    <Text style={styles.Noaccount}>Don't have an account?</Text>
    <Pressable style={{position:"absolute"}} onPress={()=>navigation.navigate("Maakaccountscherm")}><Text style={styles.Pressablestyle}>Sign up!</Text></Pressable>
    </Pressable> 
    </View>

)

}