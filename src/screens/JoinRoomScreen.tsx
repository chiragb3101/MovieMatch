import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function JoinRoomScreen({ onJoined }: { onJoined: (code: string) => void }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const joinRoom = async () => {
    const q = query(collection(db, 'rooms'), where('code', '==', code));
    const snap = await getDocs(q);
    if (!snap.empty) {
      onJoined(code);
    } else {
      setError('Room not found');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Room</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput value={code} onChangeText={setCode} placeholder="Room Code" style={styles.input} />
      <Button title="Join" onPress={joinRoom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
