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


export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
      <View style={styles.container}>
  
        <StatusBar style="auto" />

        <Text>비밀번호를 입력해 주세요</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="비밀번호 입력"
            secureTextEntry={true}
            placeholderTextColor="#222222"
            onChangeText={(password) => setPassword(password)}
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

  
        <TouchableOpacity style={styles.NextBtn} onPress={() =>navigation.navigate('Login')}>
          <Text style={styles.TextInput}>다음</Text>
          
        </TouchableOpacity>
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
});