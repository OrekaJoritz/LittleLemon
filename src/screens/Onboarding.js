// src/screens/Onboarding.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Al hacer clic en 'Siguiente', guardamos los datos y navegamos a la pantalla de inicio
  const handleNext = async () => {
    if (name && email) {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      navigation.navigate('Home');  // Navegamos a la pantalla de inicio
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Little Lemon</Text>
      <Text>Por favor ingresa tus datos:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Siguiente"
        onPress={handleNext}
        disabled={!name || !email}  // Desactiva el botón si los campos están vacíos
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});

export default OnboardingScreen;
