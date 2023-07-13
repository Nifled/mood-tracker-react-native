import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { Mood } from '../types';
import { useAppContext } from '../App.provider';

export const Home: React.FC = () => {
  const { setMoodList } = useAppContext();

  const handleChooseMood = React.useCallback((newMood: Mood) => {
    setMoodList(currentMoodList => [
      ...currentMoodList,
      { mood: newMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onChooseMood={handleChooseMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
