import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DegreeCard({ degree }) {
  return (
    <View style={styles.card}>
      <Text style={styles.course}>{degree["COURSE OF STUDY"]}</Text>
      <Text style={styles.info}>Stream: {degree.STREAM}</Text>
      <Text style={styles.info}>District: {degree.DISTRICT}</Text>
      <Text style={styles.info}>Z-Score: {degree["2023 ZSCORE"]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  course: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  info: {
    fontSize: 14,
  }
});
