// src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import MenuCategoryScreen from '../screens/MenuCategory';  // Aquí se muestra la categoría seleccionada

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="MenuCategory" component={MenuCategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
