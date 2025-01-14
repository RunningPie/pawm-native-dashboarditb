import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Redirect, router } from "expo-router";
import { signIn } from "../../lib/appwrite"
import React, { useState } from 'react'

// INI FE SEMENTARA, NANTI GANTI AJA
const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    console.log(email, password);

    try {
      await signIn(email, password);

      router.replace('/dashboard');
    } catch (error) {
      Alert.alert('Error Loging in user', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* SignUp Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/register')}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({})