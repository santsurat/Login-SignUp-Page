import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
//import Login from "./src/screens/Login/Login";
//import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
//import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
//import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
//import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import Navigation from './src/navigation/index';
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F9FbFc',
    flex: 1,
  }
})