import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { Component, useState, createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Loader from './Loader';
import RegPassword from './RegPassword';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [errortext, setErrortext] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!email) {
      alert('Email을 입력해 주세요.');
      return;
    }
    setLoading(true);
    navigation.navigate("RegPassword", {
      email: email
    });
  };

  return (
      <View style={styles.container}>
  
        <StatusBar style="auto" />
        <KeyboardAvoidingView enabled>
        <Text style={styles.image}>🥘</Text>
        <Text style={styles.text}>이메일을 입력해 주세요.</Text>
        
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput_inside}
              placeholder="이메일"
              placeholderTextColor="#9d9d9d"
              onChangeText={(email) => setEmail(email)}
              keyboardType="email-address"
              //ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
    
          <TouchableOpacity 
            style={styles.NextBtn}
            activeOpacity = {0.5} 
            onPress={handleSubmitButton}>
            <Text style={styles.TextInput}>다음</Text>
            
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
  image: {
    width: 60,
    height: 66,
    fontSize: 50,
    marginBottom: 6
  },
  text: {
    fontSize: 22,
    color: '#2b2a2a',
    marginBottom: 33
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 325,
    height: 111,
    marginBottom: 20,
    borderColor: "#363636",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
  },
 
  TextInput_inside: {
    height: 30,
    flex: 1,
    fontSize: 16,
    paddingLeft: 25
  },
  TextInput: {
    height: 30,
    flex: 1,
    fontSize: 16,
  },
  NextBtn: {
    width: 360,
    height: 83,
    paddingTop: 27,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dedede",
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});