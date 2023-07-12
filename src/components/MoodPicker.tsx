import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MOODS = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  return (
    <View style={styles.moodList}>
      {MOODS.map(({ emoji, description }) => (
        <Text key={emoji} style={styles.moodText}>
          {emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
