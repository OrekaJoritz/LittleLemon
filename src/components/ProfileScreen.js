import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedName && storedEmail) {
        setName(storedName);
        setEmail(storedEmail);
      }
    };
    loadData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('email');
    setName('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text>Nombre: {name}</Text>
      <Text>Correo Electrónico: {email}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Editar nombre"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Editar correo electrónico"
      />
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
});

export default ProfileScreen;
