import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface FoodItemProps {
  name: string;
  protein: string;
  carbs: string;
  fat: string;
  calories: string;
  color: string;
  image?: string;
}

export default function FoodItem({ name, protein, carbs, fat, calories, color }: FoodItemProps) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>🍽️</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.nutritionContainer}>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Protein: {protein}</Text>
            <Text style={styles.nutritionLabel}>Lemak: {fat}</Text>
          </View>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Karbohidrat: {carbs}</Text>
            <Text style={styles.nutritionLabel}>Kalori: {calories}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 15,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  nutritionContainer: {
    gap: 4,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.9,
    flex: 1,
  },
});
