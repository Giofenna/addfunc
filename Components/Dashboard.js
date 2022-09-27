import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Text, TextInput, View } from "react-native";
import Pagina1 from './ComponentsDashboard/Pagina1';
import Pagina2 from './ComponentsDashboard/Pagina2';


export default function Dashboard(navigation){
   return(
    <Drawer.Navigator>
    <Drawer.Screen name="Pagina1" component={Pagina1} />
    <Drawer.Screen name="Pagina2" component={Pagina2} />
  </Drawer.Navigator>) 
}

const Drawer = createDrawerNavigator();