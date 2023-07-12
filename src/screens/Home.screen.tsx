import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { Mood, MoodWithTimestamp } from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodWithTimestamp[]>([]);

  const handleChooseMood = React.useCallback((newMood: Mood) => {
    setMoodList(currentMoodList => [
      ...currentMoodList,
      { mood: newMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onChooseMood={handleChooseMood} />

      {moodList.map(item => (
        <Text key={item.timestamp}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
