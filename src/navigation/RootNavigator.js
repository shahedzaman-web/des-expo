import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../views/Login/Login"
import BeforeStart from "../views/BeforeStart/BeforeStart"
import HomePage from "../views/HomePage/HomePage"
import InstructionManualFace from '../views/InstructionManualFace/InstructionManualFace';
import InstructionManualBody from '../views/InstructionManualBody/InstructionManualBody';
import { useSelector } from 'react-redux';
import CameraScreen from '../views/Camera/CameraScreen';
const RootStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();


const AppNavigator=()=>{
  return(
    <AppStack.Navigator screenOptions={{
      headerShown:false
    }}>
      <RootStack.Screen name="HomePage" component={HomePage} />
      <RootStack.Screen name="BeforeStart" component={BeforeStart} />
      <RootStack.Screen name="InstructionFace" component={InstructionManualFace} />
      <RootStack.Screen name="InstructionBody" component={InstructionManualBody} />
      <RootStack.Screen name="Camera" component={CameraScreen} />
    </AppStack.Navigator>
  )
}

const RootNavigator = () => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  // console.log({isAuthenticated})
  return (
    <NavigationContainer
    >
		  <RootStack.Navigator 
      screenOptions={{
      headerShown:false
    }}
      initialRouteName={isAuthenticated ? "App" : "Login"}
      >
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="App" component={AppNavigator} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;