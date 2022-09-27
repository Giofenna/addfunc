import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mindfullquotesscherm from './Components/Mindfullquotesscherm';
import Welkomscherm from './Components/Welkomscherm';
import Dashboard from './Components/Dashboard';
import Personalgoalscherm from './Components/Personalgoalscherm';
import Loginscherm from './Components/Loginscherm';
import Ebookscherm from './Components/Ebookscherm';
import Maakaccountscherm from './Components/Maakaccountscherm';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Elk component heeft een Screen nodig om erheen te navigeren. De "name"-tag wordt gebruikt om te navigeren via de navigator die in een component aanwezig moet zijn.
        
        Options geven meer mogelijkheden zoals het kiezen van een volgorde van routes of het aanpassen van de header. 
        Je kunt de header color hier aanpassen zoals in de schermen of je kunt deze uitschakelen per header met options={{header: () => null}}.

        Het is mogelijk handig om een apart bestand te maken waarin alle style-objecten worden gemaakt. Deze kunnen dan makkelijk en 
        overzichtelijk worden toegevoegd aan de components/objecten.

        Keystore moet gegenereerd worden.
        */}
      <Stack.Screen name="Welkom" component={Welkomscherm} options={{headerShown:false}}/>
      <Stack.Screen name="Ebookscherm" component={Ebookscherm} options={{headerShown:false}}/>
      <Stack.Screen name="Mindfullquotesscherm" component={Mindfullquotesscherm} options={{headerShown:false}}/>
      <Stack.Screen name="Personalgoalscherm" component={Personalgoalscherm} options={{headerShown:false}}/>
      <Stack.Screen name="Loginscherm" component={Loginscherm} options={{headerShown:false}} />
      <Stack.Screen name="Maakaccountscherm" component={Maakaccountscherm} options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />

        
        
        
        </Stack.Navigator>
    
    
    </NavigationContainer>
    
  );
}

const Stack = createNativeStackNavigator();


