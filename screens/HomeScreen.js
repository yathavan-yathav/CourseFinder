import React, { useState } from 'react';
import { View, Button, TextInput, Picker, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [stream, setStream] = useState('');
  const [zscore, setZscore] = useState('');
  const [district, setDistrict] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Z-score" keyboardType="numeric" onChangeText={setZscore} style={styles.input} />
      <TextInput placeholder="Subject Stream" onChangeText={setStream} style={styles.input} />
      <TextInput placeholder="District" onChangeText={setDistrict} style={styles.input} />
      <Button title="Get Recommendations" onPress={() => navigation.navigate('Results', { stream, zscore, district })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15 }
});
