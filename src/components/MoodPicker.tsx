import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Mood } from '../types';
import { PressableArea } from './PressableArea';

const MOODS: Mood[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = React.useState<Mood>();

  return (
    <View style={styles.moodList}>
      {MOODS.map(mood => (
        <View>
          <PressableArea
            onPress={() => setSelectedMood(mood)}
            key={mood.emoji}
            style={[
              styles.moodItem,
              mood.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{mood.emoji}</Text>
          </PressableArea>

          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === mood.emoji ? mood.description : ' '}
          </Text>
        </View>
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
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
