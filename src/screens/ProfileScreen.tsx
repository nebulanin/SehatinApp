import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { UserProfile } from '../types';

export default function ProfileScreen() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    age: 28,
    height: 175,
    weight: 70,
    goal: 'Menurunkan berat badan',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profil Saya</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{profile.name.charAt(0)}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={styles.editButtonText}>
            {isEditing ? 'Batal' : 'Edit'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Usia</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.age.toString()}
            onChangeText={(text) => setProfile({ ...profile, age: parseInt(text) || 0 })}
            keyboardType="numeric"
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tinggi (cm)</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.height.toString()}
            onChangeText={(text) => setProfile({ ...profile, height: parseInt(text) || 0 })}
            keyboardType="numeric"
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Berat (kg)</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.weight.toString()}
            onChangeText={(text) => setProfile({ ...profile, weight: parseInt(text) || 0 })}
            keyboardType="numeric"
            editable={isEditing}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tujuan Kesehatan</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.goal}
            onChangeText={(text) => setProfile({ ...profile, goal: text })}
            editable={isEditing}
          />
        </View>

        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Simpan Perubahan</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Statistik</Text>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>BMI</Text>
          <Text style={styles.statValue}>
            {(profile.weight / Math.pow(profile.height / 100, 2)).toFixed(1)}
          </Text>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Status BMI</Text>
          <Text style={styles.statValue}>
            {(profile.weight / Math.pow(profile.height / 100, 2)) < 18.5
              ? 'Kurus'
              : (profile.weight / Math.pow(profile.height / 100, 2)) < 25
              ? 'Normal'
              : (profile.weight / Math.pow(profile.height / 100, 2)) < 30
              ? 'Gemuk'
              : 'Obesitas'}
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
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  disabledInput: {
    backgroundColor: '#f5f5f5',
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsSection: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
