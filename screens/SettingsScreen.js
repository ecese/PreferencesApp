import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  // 🎨 Theme’e göre renkler
  const backgroundColor = theme === 'dark' ? '#000' : '#fff';
  const textColor = theme === 'dark' ? '#fff' : '#000';

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10, color: textColor }}>
        Current Theme: {theme}
      </Text>

      <Pressable
        onPress={toggleTheme}
        style={{
          backgroundColor: theme === 'dark' ? '#444' : '#333',
          padding: 10,
          width: 140,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Toggle Theme
        </Text>
      </Pressable>
    </View>
  );
}
