import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Exercise } from '../types';

export default function ActivityScreen() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: '1', name: 'Jogging', duration: 30, caloriesBurned: 250, type: 'cardio' },
    { id: '2', name: 'Push Up', duration: 15, caloriesBurned: 100, type: 'strength' },
    { id: '3', name: 'Yoga', duration: 45, caloriesBurned: 150, type: 'flexibility' },
  ]);

  const [newExercise, setNewExercise] = useState({
    name: '',
    duration: '',
    caloriesBurned: '',
    type: 'cardio' as Exercise['type'],
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddExercise = () => {
    if (newExercise.name && newExercise.duration && newExercise.caloriesBurned) {
      const exercise: Exercise = {
        id: Date.now().toString(),
        name: newExercise.name,
        duration: parseInt(newExercise.duration),
        caloriesBurned: parseInt(newExercise.caloriesBurned),
        type: newExercise.type,
      };
      setExercises([...exercises, exercise]);
      setNewExercise({ name: '', duration: '', caloriesBurned: '', type: 'cardio' });
      setShowAddForm(false);
    }
  };

  const getTypeColor = (type: Exercise['type']) => {
    switch (type) {
      case 'cardio':
        return '#FF9800';
      case 'strength':
        return '#F44336';
      case 'flexibility':
        return '#9C27B0';
      default:
        return '#4CAF50';
    }
  };

  const getTypeLabel = (type: Exercise['type']) => {
    switch (type) {
      case 'cardio':
        return 'Kardio';
      case 'strength':
        return 'Kekuatan';
      case 'flexibility':
        return 'Kelenturan';
      default:
        return type;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aktivitas Olahraga</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowAddForm(!showAddForm)}
        >
          <Text style={styles.addButtonText}>
            {showAddForm ? 'Batal' : '+ Tambah'}
          </Text>
        </TouchableOpacity>
      </View>

      {showAddForm && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama Olahraga"
            value={newExercise.name}
            onChangeText={(text) => setNewExercise({ ...newExercise, name: text })}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Durasi (menit)"
            value={newExercise.duration}
            onChangeText={(text) => setNewExercise({ ...newExercise, duration: text })}
            keyboardType="numeric"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Kalori terbakar"
            value={newExercise.caloriesBurned}
            onChangeText={(text) => setNewExercise({ ...newExercise, caloriesBurned: text })}
            keyboardType="numeric"
          />
          
          <View style={styles.typeButtons}>
            {(['cardio', 'strength', 'flexibility'] as const).map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.typeButton,
                  newExercise.type === type && styles.selectedType,
                ]}
                onPress={() => setNewExercise({ ...newExercise, type })}
              >
                <Text style={[
                  styles.typeButtonText,
                  newExercise.type === type && styles.selectedTypeText,
                ]}>
                  {getTypeLabel(type)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity style={styles.saveButton} onPress={handleAddExercise}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.exercisesList}>
        {exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseCard}>
            <View style={styles.exerciseHeader}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <View style={[styles.typeBadge, { backgroundColor: getTypeColor(exercise.type) }]}>
                <Text style={styles.typeText}>{getTypeLabel(exercise.type)}</Text>
              </View>
            </View>
            
            <View style={styles.exerciseDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Durasi</Text>
                <Text style={styles.detailValue}>{exercise.duration} menit</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Kalori</Text>
                <Text style={styles.detailValue}>{exercise.caloriesBurned} kkal</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Ringkasan Hari Ini</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Durasi</Text>
          <Text style={styles.summaryValue}>
            {exercises.reduce((sum, ex) => sum + ex.duration, 0)} menit
          </Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Kalori</Text>
          <Text style={styles.summaryValue}>
            {exercises.reduce((sum, ex) => sum + ex.caloriesBurned, 0)} kkal
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  typeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  typeButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
  },
  selectedType: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  typeButtonText: {
    color: '#666',
  },
  selectedTypeText: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exercisesList: {
    padding: 10,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  typeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  exerciseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  summary: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
