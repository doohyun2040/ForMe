
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

        <Image source = {require('./../Images/drawable-hdpi/13_13.png')} style={styles.logo} />

        <TouchableOpacity style={styles.Kakao} >
          <Image source={require('./../Images/Kakaotalk.jpg')} style={styles.Kakao_icon} />
          <Text style={styles.Kakao_TextInput}>카카오톡으로 계속하기</Text>
        </TouchableOpacity>

        <Text style={{color: "#9d9d9d", fontSize: 14}}>또는</Text>


        <View style={styles.Row_Icon}>
          <TouchableOpacity style={styles.Naver} >
            <Image source={require('./../Images/drawable-hdpi/978.png')} style={styles.Navericon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Google} >
            <Image source={require('./../Images/drawable-hdpi/979.png')} style={styles.Googleicon}/>
          </TouchableOpacity>

          
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
            <Text style={{color: '#9d9d9d', fontSize: 16}}>이메일로 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate('Register')}>
            <Text style={{color: '#9d9d9d', fontSize: 16}}>이메일로 가입</Text>
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
  Kakao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#fee100",
    width: 325,
    height: 55,
    marginTop: 30,
    marginBottom: 20,
  },
  Kakao_icon: {
    width: 39,
    height: 36,
    alignItems: 'center',
    marginLeft: 60
  },
  Kakao_TextInput: {
    height: 19,
    flex: 1,
    width: 142,
    color: "#363636",
    alignItems: 'center',
    fontSize: 16,
  },
  Row_Icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "30%",
    marginBottom: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "55%",
    marginBottom: 20
  },

  logo: {
    marginTop: 195.3,
    width: 85,
    height: 79
  }
});