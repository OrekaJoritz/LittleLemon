// src/screens/MenuCategory.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';

const MenuCategoryScreen = ({ route }) => {
  const { categoryId, categoryName } = route.params;

  // Simulando un listado de menú por categoría
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener los elementos del menú
    const items = getMenuItemsForCategory(categoryId);
    setMenuItems(items);
  }, [categoryId]);

  // Función que simula obtener los elementos del menú de acuerdo a la categoría
  const getMenuItemsForCategory = (categoryId) => {
    const allItems = {
      '1': [
        { name: 'Ensalada César', description: 'Lechuga, pollo y aderezo César', price: 5 },
        { name: 'Sopa de lentejas', description: 'Sopa nutritiva con lentejas', price: 4 },
      ],
      '2': [
        { name: 'Pasta Boloñesa', description: 'Pasta con salsa boloñesa', price: 12 },
        { name: 'Pizza Margarita', description: 'Pizza con tomate, queso y albahaca', price: 10 },
      ],
      '3': [
        { name: 'Tarta de manzana', description: 'Postre con manzana y masa hojaldrada', price: 6 },
        { name: 'Helado de vainilla', description: 'Helado artesanal de vainilla', price: 4 },
      ],
      '4': [
        { name: 'Limonada', description: 'Jugo fresco de limón', price: 3 },
        { name: 'Cerveza artesanal', description: 'Cerveza local artesanal', price: 5 },
      ],
    };

    return allItems[categoryId] || [];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryName}</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default MenuCategoryScreen;
