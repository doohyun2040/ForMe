
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Home({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
      <View style={styles.container}>
  
        <StatusBar style="auto" />

        <Image source = {require('C:/FrontEnd/ForMe/LoginLayout/src/Images/drawable-hdpi/13_13.png')} style={styles.logo} />

        <TouchableOpacity style={styles.Kakao} >
          <Image source={require('./../Images/Kakaotalk.jpg')} style={styles.icon} />
          <Text style={styles.TextInput_Black}>카카오톡으로 계속하기</Text>
        </TouchableOpacity>

        <Text style={{color: "#9d9d9d", fontSize: 14}}>또는</Text>

        <TouchableOpacity style={styles.Google} >
          <Image source={require('C:/FrontEnd/ForMe/LoginLayout/src/Images/drawable-hdpi/979.png')} style={styles.Googleicon}/>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.Naver} >
          <Image source={require('C:/FrontEnd/ForMe/LoginLayout/src/Images/drawable-hdpi/978.png')} style={styles.Navericon} />
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
            <Text style={styles.TextInput_Black}>이메일로 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate('Register')}>
            <Text style={styles.TextInput_Black}>이메일로 가입</Text>
          </TouchableOpacity>
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
    backgroundColor: "#5CD1E5",
    borderRadius: 30,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  Naver: {
    borderRadius: 35,
    width: 45,
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  Navericon: {
    width:"100%",
    height:"100%"
  },
  Kakao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#fee100",
    width: 325,
    height: 55,
    marginTop: 30,
 
  },
  Google: {
    flexDirection: 'row',
    borderRadius: 35,
    width: 45,
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  Googleicon: {
    width:"100%",
    height:"100%"
  },
 
  TextInput_White: {
    height: 30,
    flex: 1,
    padding: 5,
    color: "#FFFFFF",
    fontSize: 16
  },
  TextInput_Black: {
    height: 19,
    flex: 1,
    width: 142,
    color: "#363636",
    alignItems: 'center',
    fontSize: 16,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "60%",
    marginBottom: 20
  },
  icon: {
    width: 39,
    height: 36
  },
  logo: {
    marginTop: 195.3,
    width: 85,
    height: 79
  }
});