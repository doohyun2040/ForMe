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

        <Text>이메일을 입력해 주세요</Text>
        
        <KeyboardAvoidingView enabled>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="email"
              placeholderTextColor="#222222"
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
    borderRadius: 10,
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
});