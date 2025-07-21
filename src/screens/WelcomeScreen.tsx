import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import MenuCard from '../components/MenuCard';
import { RootStackParamList } from '../navigation/TabNavigator';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.date}>Jul 07, 2025</Text>
          <Text style={styles.appName}>SEHATIN</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>WELCOME, User!!</Text>
          <Text style={styles.welcomeSubtitle}>
            Sehat itu simple. Yang penting niat, sisanya biar SEHATIN yang bantuain.
          </Text>
        </View>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>+</Text>
            </View>
          </View>
        </View>

        {/* Menu Cards */}
        <View style={styles.menuSection}>
          <MenuCard
            title="Reminder Kesehatan"
            description="Fitur ini akan mengingatkan Anda untuk bangun tidur, makan tepat waktu, berolahraga, dan beristirahat sesuai jadwal gemi gaya hidup yang lebih sehat dan seimbang."
            color="#FFA726"
            onPress={() => {
              // Navigate to reminder screen
              console.log('Navigate to Reminder');
            }}
          />

          <MenuCard
            title="Rekomendasi Menu Sehat"
            description="Fitur ini menyajikan berbagai rekomendasi resep bergizi yang mudah dibuat dan ramah di kantong"
            color="#FFA726"
            onPress={() => {
              // Navigate to recommendations screen
              console.log('Navigate to Recommendations');
            }}
          />

          <MenuCard
            title="Menu Sehat 10 Hari"
            description="Fitur ini untuk rekomendasi menu harian selama 10 hari ke depan, lengkap dengan estimasi biaya dan pilihan bahan sederhana yang mudah ditemukan"
            color="#FFA726"
            onPress={() => {
              navigation.navigate('Menu');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  date: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  appName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.9,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuSection: {
    paddingBottom: 30,
  },
});
