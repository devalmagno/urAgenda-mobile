import React from 'react';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Archivo_400Regular,
    Archivo_600SemiBold,
  })

  if (!fontsLoaded) return null;

  return (
    <Routes />
  );
}