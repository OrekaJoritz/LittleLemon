import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = async () => {
    if (name && email) {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ingrese sus datos</Text>
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
      <Button title="Siguiente" onPress={handleNext} disabled={!name || !email} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
});

export default OnboardingScreen;
