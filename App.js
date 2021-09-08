import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
