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
      alert('비밀번호를 입력해 주세요.');
      return;
    }
    setLoading(false);
    navigation.navigate("PrefSel", {email:email, password:password})
  
  }
  return (
      <View style={styles.container}>
        <Loader loading={loading}/>
        <StatusBar style="auto" />
        <KeyboardAvoidingView enabled>
        <Text style={styles.image}>🍭</Text>
        <Text style={styles.text}>비밀번호를 입력해주세요.</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput_inside}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
              placeholderTextColor="#9d9d9d"
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
              style={styles.TextInput_inside}
              placeholder="비밀번호 확인"
              secureTextEntry={true}
              placeholderTextColor="#9d9d9d"
            />
          </View>
          {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
    
          <TouchableOpacity style={styles.NextBtn} onPress={handleSubmitButton}>
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
  TextInput_inside: {
    height: 30,
    flex: 1,
    fontSize: 16,
    paddingLeft: 25
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
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});