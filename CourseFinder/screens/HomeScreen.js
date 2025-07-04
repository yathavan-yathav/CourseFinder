import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen({ navigation }) {
  const [stream, setStream] = useState('');
  const [district, setDistrict] = useState('');
  const [zscore, setZscore] = useState('');

  const streamOptions = ['Bio', 'Maths', 'Tech'];
  const districtOptions = [
    'Badulla', 'Gampaha', 'Colombo', 'Kalutara', 'Kandy', 'Matale', 'NuwaraEliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 'Monaragala', 'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunagala', 'Puttalam', 'Anuradhapura', 'Pollonaruwa', 'Kegalle', 'Ratnapura'
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Select Stream</Text>
      <Picker
        selectedValue={stream}
        onValueChange={(value) => setStream(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Stream..." value="" />
        {streamOptions.map((item) => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>

      <Text style={styles.label}>Select District</Text>
      <Picker
        selectedValue={district}
        onValueChange={(value) => setDistrict(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select District..." value="" />
        {districtOptions.map((item) => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>

      <Text style={styles.label}>Z-Score</Text>
      <TextInput
        placeholder="Enter Z-Score"
        keyboardType="numeric"
        onChangeText={setZscore}
        style={styles.input}
      />

      <Button
        title="Get Recommendation"
        onPress={() =>
          navigation.navigate('Results', { stream, district, zscore })
        }
        disabled={!stream || !district || !zscore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 10, fontWeight: 'bold' },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 5,
    fontSize: 16,
  },
  picker: {
    marginBottom: 5,
  
  },
});
