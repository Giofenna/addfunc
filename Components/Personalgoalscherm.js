import React, { Text, View,Dimensions, Image,TouchableOpacity, StyleSheet } from "react-native";

export default function Personalgoalscherm({navigation}){
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;
    console.log("heigth " + 10/height+ " "+ "width "+ 115/width)
    const styles = StyleSheet.create({
        Text1:{alignSelf:"center", position:"relative",color:"#61CBB4",fontSize:50,top:(0.6130208333333333*height),left:(0.02546296296296296*width),zIndex:1,fontWeight:"bold"}
        ,Text2:{alignSelf:"center", position:"relative",color:"#FFFFFF",fontSize:15,top:(0.6130208333333333*height),right:(0.043287037037037034*width),zIndex:1,fontWeight:"bold", width:300}
        ,TouchableOpacity:{position:"absolute", zIndex:1, width:(0.8912037037037036*width)}
        ,Image:{position: "absolute",height:height,width:width}
        ,Buttontext:{position:"absolute" , fontWeight:"bold",zIndex:1, top:(0.8479166666666667*height), left:(0.07638888888888888*width), borderRadius:15, paddingHorizontal:(0.29282407407407407*width), paddingVertical:(0.011458333333333333*height), fontSize:25,backgroundColor:"#61CBB4", color:"white"}
    })
    

    return(
    <View>
<Text style={styles.Text1}>Track personal goals    </Text>
<Text style={styles.Text2}></Text>
<Image source={require("../assets/boekenkast.jpg")} style={styles.Image}></Image>
<TouchableOpacity onPress={()=>navigation.navigate("Loginscherm")} style={styles.TouchableOpacity}>
    <Text style={styles.Buttontext}>Proceed</Text>
    </TouchableOpacity>
    </View>)
}