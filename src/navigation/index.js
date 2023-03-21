import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login/Login";
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/index'
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} style={styles.root}>
       <Stack.Screen name="SignIn" component={Login} />
       <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
       <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
       <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
       <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles=StyleSheet.create({
    root:{
        color:'#000000'
    }
})
export default Navigation