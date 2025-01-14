import { createStackNavigator } from "@react-navigation/stack";
import Registro from "../screens/RegistroScreen";
import Welcome from "../screens/WelcomeScreen";
import Login from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegistroScreen from "../screens/RegistroScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GaleriaScreen from "../screens/GaleriaScreen";
import CamaraScreen from "../screens/CamaraScreen";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyStack(){
  return(
    <Stack.Navigator >

      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Registro" component={RegistroScreen}/>
      <Stack.Screen name="Welcome" component={MyTabs}/>
    </Stack.Navigator>
  )

}

function MyTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen}/>
      <Tab.Screen name="Galeria" component={GaleriaScreen}/>
      <Tab.Screen name="Camara" component={CamaraScreen}/>
    </Tab.Navigator>
  )
}

export default function Navegador(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}