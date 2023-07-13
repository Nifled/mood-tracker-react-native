import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { Mood } from '../types';
import { setAppStorage, useAppContext } from '../App.provider';

export const Home: React.FC = () => {
  const { setMoodList } = useAppContext();

  const handleChooseMood = React.useCallback((newMood: Mood) => {
    setMoodList(currentMoodList => {
      const newMoodList = [
        ...currentMoodList,
        { mood: newMood, timestamp: Date.now() },
      ];

      // Save to `AsyncStorage`
      setAppStorage({ moods: newMoodList });

      return newMoodList;
    });
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
