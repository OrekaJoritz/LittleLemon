// src/screens/Home.js

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const menuCategories = [
    { id: '1', name: 'Entradas' },
    { id: '2', name: 'Platos principales' },
    { id: '3', name: 'Postres' },
    { id: '4', name: 'Bebidas' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>Little Lemon Restaurant</Text>
      <FlatList
        data={menuCategories}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('MenuCategory', { categoryId: item.id, categoryName: item.name })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  heroText: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
