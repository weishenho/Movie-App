import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';


const TAB_BAR_HEIGHT=50;
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs

      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: { backgroundColor: '#042541', height: TAB_BAR_HEIGHT },
        tabBarShowLabel: false,
        tabBarItemStyle: {

          alignItems: 'center',
          flexDirection: 'row',
          height: TAB_BAR_HEIGHT
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name="house.fill" color={focused ? color : "#FFF"} />,
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name="bookmark.fill" color={focused ? color : "#FFF"} />,
        }}
      />
    </Tabs>
  );
}

