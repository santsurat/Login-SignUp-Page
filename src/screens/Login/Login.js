import { View, StyleSheet, Image, useWindowDimensions, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import Radhasoami from '../../../assets/Image/Radhasoami.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignUpScreen');
  }
  // const onForgotPasswordPressed = () => {

  //   navigation.navigate('ForgotPasswordScreen')
  // }
  const onSignUp = () => {
    navigation.navigate('SignUpScreen')
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Radhasoami} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain"
        />
        <View>
          <Text style={styles.container}>ADANBAGH ATTENDANCE</Text>
          <Text style={styles.appContainer}> MANAGEMENT SYSTEM</Text>
        </View>
        <CustomInput placeholder='Username'
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry={true}

        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />

        {/* <CustomButton  text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" /> */}


        <CustomButton text="Don't have an account? Create one" onPress={onSignUp} type="TERTIARY" />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 200,
    marginBottom: 10,
  },
  container: {
    color: '#F9DB24',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  appContainer: {
    color: '#F9DB24',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'auto',
    marginTop: 8,
    alignSelf: 'center'

  }

})
export default Login