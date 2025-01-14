import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Redirect, router } from "expo-router";
import { createUser } from "../../lib/appwrite"
import { React, useState } from 'react'

// INI FE SEMENTARA, NANTI GANTI AJA
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !username) {
      alert('Please fill in all fields');
      return;
    }
    // Pass input values to your `createUser` function
    console.log(username, email, password);
    createUser(username, email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({})