import { Stack } from 'expo-router';
import 'react-native-reanimated';



export default function HomeStack() {

  return (

    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ headerShown: false }} />

    </Stack>

  );
}
