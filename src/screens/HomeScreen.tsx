import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ onCreateRoom, onJoinRoom }: { onCreateRoom: () => void; onJoinRoom: () => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MovieMatch</Text>
      <Button title="Create Room" onPress={onCreateRoom} />
      <Button title="Join Room" onPress={onJoinRoom} />
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
