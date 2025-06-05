import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ onSignup }: { onSignup: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add real login logic here
    alert(`Logging in with ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={onSignup} />
    </View>
  );
};

const SignupScreen = ({ onBack }: { onBack: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add real signup logic here
    alert(`Signing up with ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Back to Login" onPress={onBack} />
    </View>
  );
};

export default function App() {
  const [showSignup, setShowSignup] = useState(false);
  return showSignup ? (
    <SignupScreen onBack={() => setShowSignup(false)} />
  ) : (
    <LoginScreen onSignup={() => setShowSignup(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4
  }
});
