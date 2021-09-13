import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Ketboard,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from './Loader';



export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errortext, setErrortext] = useState('');
  const [loading, setLoading] = useState(false);
 
  const passwordInputRef = createRef();

  //when you press button
  const handleSubmitPress = () => {
    //handle error(empty space)
    setErrortext('');
    if (!email) {
      alert('이메일을 입력해 주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해 주세요.');
      return;
    }
    setLoading(true);
    //data format
    let dataToSend = {email: email, password: password}; //dict
    let formBody = [];

    //email, password key, value encoding
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue); // email = ~~~~~
    }
    formBody = formBody.join('&');

    fetch('url' , { //요청 url 기입
      method: 'POST' ,
      //body: formBody,
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 
        //'application/x-www-form-urlencoded;charset=UTF-8',
        // email=email1&password=password1
        'application/json'
      },

    })
      .then((response) => response.json()) //json 전환
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        //If server response message == Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('RegID'); //이 루트 대신 메인 화면으로 보냄 될 듯
        } else { //wrong ID or Password
          setErrortext(responseJson.msg);
          console.log('Please check your email ID or Password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });

  };

  return (
      <View style={styles.container}>
        <Loader loading={loading} />
          <View>
            <KeyboardAvoidingView enabled>
              <StatusBar style="auto" />
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  placeholderTextColor="#222222"
                  onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                  returnKeyType="next"
                  keyboardType = "email-address"
                  autoCapitalize="none"
                  blurOnSubmit = {false}
                  onChangeText = {(email) => setEmail(email)}
                />
              </View>
        
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#222222"
                  secureTextEntry={true}
                  keyboardType = "default"
                  ref = {passwordInputRef}
                  returnKeyType = "next"
                  blurOnSubmit = {false}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(password) => setPassword(password)}
                />
              </View>

              {errortext != '' ? (
                <Text style={styles.errorTextStyle}>
                  {errortext}
                </Text>
              ) : null}

              <TouchableOpacity 
                style={styles.loginBtn}
                activeOpacity={0.8}
                onPress={handleSubmitPress}>
                <Text style={styles.TextInput}>다음</Text>
                
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
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
    marginLeft: 20,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#555555"
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});