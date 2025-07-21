import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type MenuItem = {
  id: number;
  title: string;
};

const menuData: MenuItem[] = [
  { id: 1, title: 'Tumis Kangkung' },
  { id: 2, title: 'Chicken Salad' },
  { id: 3, title: 'Sup Ayam Sehat' },
  { id: 4, title: 'Nasi Merah dan Telur' },
  { id: 5, title: 'Smoothie Buah Segar' },
  { id: 6, title: 'Oatmeal dan Pisang' },
  { id: 7, title: 'Ikan Panggang dan Sayur' },
  { id: 8, title: 'Tumis Tofu dan Brokoli' },
  { id: 9, title: 'Ayam Rebus dan Kentang' },
  { id: 10, title: 'Salad Sayur Mix' },
];

type MenuScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MenuList'
>;

const MenuScreen = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('RecipeDetail', { id: item.id })}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Sehat 10 Hari</Text>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#d0f0c0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MenuScreen;
