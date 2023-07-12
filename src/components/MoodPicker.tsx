import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Mood } from '../types';
import { PressableArea } from './PressableArea';
import { theme } from '../theme';

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
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>

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

      <PressableArea style={styles.button}>
        <Text style={styles.buttonText}>Choose</Text>
      </PressableArea>
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
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.white,
  },
  descriptionText: {
    color: theme.colors.purple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colors.purple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colors.purple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
