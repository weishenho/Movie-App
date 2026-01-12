import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { MovieProvider } from '@/context/MovieContext';
import { WatchListProvider } from '@/context/WatchListContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider  >
      <SafeAreaView style={{ flex: 1 }}>
        <MovieProvider>
          <WatchListProvider>

            <View style={{ paddingTop: 20, alignItems: "center", paddingBottom: 12 }}>
              <Image source={require("@/assets/images/movies/Logo.png")} style={{ width: 80, height: 57 }} />
            </View>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >

              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
              </Stack>
              <StatusBar style="auto" />

            </ThemeProvider>
          </WatchListProvider>

        </MovieProvider>
      </SafeAreaView>

    </SafeAreaProvider >
  );
}
