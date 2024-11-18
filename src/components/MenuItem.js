// src/components/MenuItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuItem = ({ name, description, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1, borderColor: 'gray' },
  name: { fontWeight: 'bold', fontSize: 16 },
  price: { fontWeight: 'bold', color: 'green' },
});

export default MenuItem;
