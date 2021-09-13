import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import Loader from './Loader';


export default function Register({navigation,route}) {
  const email = route.params.email;
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistrationSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
 
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!password) {
      alert('Please fill Password');
      return;
    }
    setLoading(false);
    let dataToSend = {
      email: email,
      password: password,
    };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    /*
    fetch('http://localhost:19002/api/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type' :
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    */
   fetch('url', { //url 기입
     method: 'POST',
     body: JSON.stringify(dataToSend),
     headers: {
       'Content-Type' : 'application/json',
     },
   })
      .then((response) => {
        response.json();
        console.log('hi')
        console.log(response)
        console.log(response.json())
      })
      .then((responseJson) => {
        setLoading(false);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);

      });
    
  };
  if (isRegistrationSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
      <View style={styles.container}>
        <Loader loading={loading}/>
        <StatusBar style="auto" />

        <Text>비밀번호입력</Text>
        <Text>{route.params.email}</Text>
        <KeyboardAvoidingView enabled>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
              placeholderTextColor="#222222"
              onChangeText={(password) => setPassword(password)}
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="비밀번호 확인"
              secureTextEntry={true}
              placeholderTextColor="#222222"
            />
          </View>
          {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
    
          <TouchableOpacity style={styles.NextBtn} onPress={handleSubmitButton}>
            <Text style={styles.TextInput}>Register</Text>
            
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 40,
    marginBottom: 20,
    borderColor: "black",
    borderBottomLeftRadius: 10/2,
    borderBottomRightRadius: 10/2,
    borderTopLeftRadius: 10/2,
    borderTopRightRadius: 10/2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 30,
    flex: 1,
    padding: 10,
  },

  NextBtn: {
    width: "70%",
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555555",
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});