import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import { CarDetails } from "./src/screens/CarDetails";
import { Home } from "./src/screens/Home";
import { Scheduling } from "./src/screens/Scheduling";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";
import theme from "./src/styles/theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });
  if (!isFontLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  );
}
