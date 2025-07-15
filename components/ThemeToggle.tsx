import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, Theme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, colors, isDark } = useTheme();

  const themeOptions: { key: Theme; label: string; icon: string }[] = [
    { key: 'light', label: 'Light', icon: 'sunny-outline' },
    { key: 'dark', label: 'Dark', icon: 'moon-outline' },
    { key: 'system', label: 'System', icon: 'phone-portrait-outline' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.title, { color: colors.text }]}>Theme</Text>
      <View style={styles.optionsContainer}>
        {themeOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              { 
                backgroundColor: theme === option.key ? colors.primary : 'transparent',
                borderColor: colors.border,
              }
            ]}
            onPress={() => setTheme(option.key)}
          >
            <Ionicons
              name={option.icon as any}
              size={20}
              color={theme === option.key ? 'white' : colors.text}
            />
            <Text
              style={[
                styles.optionText,
                { 
                  color: theme === option.key ? 'white' : colors.text,
                  marginLeft: 8,
                }
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 4,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});