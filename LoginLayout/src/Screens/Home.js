
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React, { useState } from "react";
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

        <TouchableOpacity style={styles.Kakao} >
          <Image source={require('./../Images/Kakaotalk.jpg')} style={styles.icon} />
          <Text style={styles.TextInput_Black}>Kakao</Text>
        </TouchableOpacity>

        <Text>OR</Text>

        <TouchableOpacity style={styles.Google} >
          <Image source={require('./../Images/Google.jpg')} style={styles.icon} />
          <Text style={styles.TextInput_White}>Google</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.Naver} >
          <Image source={require('./../Images/Naver.png')} style={styles.icon} />
          <Text style={styles.TextInput_White}>Naver</Text>
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
 
  image: {
    marginBottom: 40,
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
    paddingHorizontal: 80,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#00C43B",
    width: "70%",
    height: 40,
    marginTop: 20,
    marginBottom: 20,
 
    alignItems: "center",
  },
  Kakao: {
    paddingHorizontal: 80,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#f9e000",
    width: "70%",
    height: 40,
    marginTop: 100,
    marginBottom: 20,
 
    alignItems: "center",
  },
  Google: {
    paddingHorizontal: 80,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#012e67",
    width: "70%",
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    color: "#FFFFFF",
 
    alignItems: "center",
  },
 
  TextInput_White: {
    height: 30,
    flex: 1,
    padding: 5,
    color: "#FFFFFF",
  },
  TextInput_Black: {
    height: 30,
    flex: 1,
    padding: 5,
    color: "#222222",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "60%",
    marginBottom: 130
  },
  icon: {
    width: 25,
    height: 25
  },
});