import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function CreateRoomScreen({ onRoomCreated }: { onRoomCreated: (code: string) => void }) {
  const [creating, setCreating] = useState(false);
  const createRoom = async () => {
    setCreating(true);
    const code = Math.random().toString(36).substring(2, 8);
    await addDoc(collection(db, 'rooms'), { code, createdAt: Date.now() });
    onRoomCreated(code);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Room</Text>
      <Button title={creating ? 'Creating...' : 'Create'} onPress={createRoom} disabled={creating} />
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
});
