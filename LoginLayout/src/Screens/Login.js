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

    fetch('url' , { //요청 url 기입
      method: 'POST' ,
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 
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
          <Image source = {require('./../Images/drawable-hdpi/13_13.png')} style={styles.logo} />
          <View>
            <KeyboardAvoidingView enabled>
              <StatusBar style="auto" />

              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="이메일 주소"
                  placeholderTextColor="#9d9d9d"
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
                  placeholder="비밀번호"
                  placeholderTextColor="#9d9d9d"
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
                <Text style={styles.TextInput_1}>로그인</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.RegBtn}
                activeOpacity={0.8}
                onPress={() =>navigation.navigate('Register')}>
                <Text style={styles.TextInput}>아이디, 비밀번호 찾기</Text>
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
 
  logo: {
    marginTop: '24.05%', // 195.3/812
    width: '22.4%', // 84/ 375
    height: '14%', // 79/812
    alignItems: 'center',
    marginBottom: 41 // 43/812
  },

  inputView: {
    //flex: 0.3,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    width: 325,
    height: 55,
    marginBottom: 20,
    borderColor: "#e2e2e2",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingLeft: 21,
    paddingTop: 10
  },
 
 
  TextInput: {
    height: 30,
    fontSize: 16,
  },
  TextInput_1: {
    height: 30,
    fontSize: 16,
    color: '#ffffff'
  },

  loginBtn: {
    //flex: 0.2,
    width: "100%",
    borderRadius: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00becd",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 20
  },
  RegBtn: {
    //flex: 0.2,
    width: "100%",
    height: 20,
    marginLeft: 180
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});