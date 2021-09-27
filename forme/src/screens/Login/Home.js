import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState, Component } from "react";
import {  StyleSheet,  Text,  View,  Image,  TextInput,  Button,  TouchableOpacity} from "react-native";
import { icon_naver, icon_google, kakao, logo } from "../../Images";

export default function Home({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
      <View style={styles.container}>
  
        <StatusBar style="auto" />
        
        <Image source = {logo} style={styles.logo} />

        <TouchableOpacity style={styles.Kakao} >
          <Image source={kakao} style={styles.Kakao_icon} />
          <Text style={styles.Kakao_TextInput}>카카오톡으로 계속하기</Text>
        </TouchableOpacity>

        <Text style={styles.Text}>또는</Text>


        <View style={styles.Row_Icon}>
          <TouchableOpacity style={styles.Naver} >
            <Image source={icon_naver} style={styles.Navericon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Google} >
            <Image source={icon_google} style={styles.Googleicon}/>
          </TouchableOpacity>

          
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
            <Text style={styles.login}>이메일로 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate('Register')}>
            <Text style={styles.register}>이메일로 가입</Text>
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
 
  logo: {
    marginTop: '24.05%',
    width: '22.4%',
    height: '14%',
    alignItems: 'center',
    marginBottom: '5.296%'
  },
  

  Kakao: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#fee100",
    width: 325,
    height: 55,
    marginTop: '5.296%',
    marginBottom: '2.09%'
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


  Naver: {
    borderRadius: 35,
    width: 45,
    height: 45,
    alignItems: "center",
    marginLeft: '34.4%',
    marginRight: '7%'
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
    alignItems: "center",
    marginRight: '34.67%'
  },
  Googleicon: {
    width:"100%",
    height:"100%"
  },

  //또는
  Text: {
    color: "#9d9d9d",
    fontSize: 14,
    marginTop: '2.09%'
  },

  //Naver and Google
  Row_Icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    height: '5.54%',
    marginTop: "3.3%", 
    marginBottom: '4.56%',
  },

  //이메일로 로그인, 이메일로 가입
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "80%",
    marginTop: '4.56%',
  },
  login: {
    color: '#3e3e3e',
    fontSize: 12,
    width: 85,
    height: 18,
    marginLeft: '32%',
    
  },
  register: {
    color: '#3e3e3e',
    fontSize: 12,
    marginRight: '100%',
    width: 85,
    height: 18,
  }
});