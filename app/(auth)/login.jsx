import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Redirect, router } from "expo-router";
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
            className="pl-6"
            onPress={() => {router.push('/register')}}
          >
            <Text className="text-black text-xl font-karla_bold">
              Sign Up
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})