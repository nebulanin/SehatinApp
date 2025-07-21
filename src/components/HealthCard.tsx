import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HealthCardProps {
  title: string;
  value: string | number;
  unit: string;
  color: string;
  icon?: string;
}

export default function HealthCard({ title, value, unit, color }: HealthCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 15,
    margin: 10,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  unit: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
});
