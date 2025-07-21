import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import HealthCard from '../components/HealthCard';
import ProgressBar from '../components/ProgressBar';

export default function HomeScreen() {
  const todayStats = {
    steps: 8432,
    calories: 420,
    water: 6,
    sleep: 7.5,
  };

  const goals = {
    steps: 10000,
    calories: 500,
    water: 8,
    sleep: 8,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Selamat Pagi!</Text>
        <Text style={styles.subtitle}>Ayo jaga kesehatanmu hari ini</Text>
      </View>

      <View style={styles.statsContainer}>
        <HealthCard
          title="Langkah"
          value={todayStats.steps}
          unit="langkah"
          color="#4CAF50"
        />
        <HealthCard
          title="Kalori"
          value={todayStats.calories}
          unit="kkal"
          color="#FF9800"
        />
      </View>

      <View style={styles.statsContainer}>
        <HealthCard
          title="Air"
          value={todayStats.water}
          unit="gelas"
          color="#2196F3"
        />
        <HealthCard
          title="Tidur"
          value={todayStats.sleep}
          unit="jam"
          color="#9C27B0"
        />
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Progress Harian</Text>
        
        <ProgressBar
          progress={todayStats.steps}
          max={goals.steps}
          label="Target Langkah"
          color="#4CAF50"
        />
        
        <ProgressBar
          progress={todayStats.water}
          max={goals.water}
          label="Target Air"
          color="#2196F3"
        />
        
        <ProgressBar
          progress={todayStats.sleep}
          max={goals.sleep}
          label="Target Tidur"
          color="#9C27B0"
        />
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Aksi Cepat</Text>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Tambah Air</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Catat Makanan</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Mulai Olahraga</Text>
        </TouchableOpacity>
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
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  progressSection: {
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
  quickActions: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
