import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
//import Radhasoami from '../../../assets/Image/Radhasoami.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerScreen from "../../DateTimePickerScreen/DateTimePickerScreen";
import CheckBox from '@react-native-community/checkbox';


const SignUpScreen = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  // const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')



  //This line is use for checkbox
  const initialState = {
    Jigyasu: false,
    Initiviate: false,
  };
  const [state, setState] = useState(initialState);
  //const [toogleButton,seToggleButton]=useState(false);

  // const [isjigyasu,setIsJigyasu] =useState(false);
  // const [isinitiative, setIsInitiative] =useState(false);


  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn('Submited')
    // navigation.navigate('ConfirmEmailScreen')
  }
  const onSignUp = () => {
    console.warn('SignUp')

  }
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed')
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Fill your Details</Text>

        <View style={styles.container}>

          <CheckBox style={styles.CheckBox}
            hideBox={false}
            tintColors='#000000'
            disabled={false}
            value={state.Jigyasu}
            onValueChange={(value) => setState({ ...state, Jigyasu: value })}
          />

          <Text style={styles.color}>Jigyasu</Text>

          <CheckBox style={styles.CheckBox}
            hideBox={false}
            tintColors='#000000'
            disabled={false}
            value={state.Initiviate}
            onValueChange={(value) => setState({ ...state, Initiviate: value })}
          />

          <Text style={styles.color}>Initiative</Text>

        </View>


        <CustomInput placeholder='Firstname'
          value={firstname}
          setValue={setFirstname}
        />

        <CustomInput placeholder='Lastname'
          value={lastname}
          setValue={setLastname}
        />

        <CustomInput placeholder='Email'
          value={email}
          setValue={setEmail}
        />

        {/* <CustomInput placeholder='Contact number'
      value={number} 
      setValue={setNumber}

      /> */}

        <CustomInput placeholder='password'
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput placeholder='Confirm password'
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <DateTimePickerScreen />

        <CustomButton text="Submit" onPress={onRegisterPressed} />

        {/* <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
         <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text> */}

        {/* <CustomButton  text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" /> */}


        {/* <CustomButton  text="Already have an account ?" onPress={onSignUp} type="TERTIARY" /> */}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 15,
    marginVertical: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  CheckBox: {
    margin: 10,
  },
  color: {
    color: "#000000",
    marginHorizontal: 5
  }


})
export default SignUpScreen