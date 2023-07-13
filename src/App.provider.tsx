import React from 'react';
import { AppContext, AppStorage, Mood, MoodWithTimestamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Get App data from `AsyncStorage`
const storageKey = 'app-data';
export const getAppStorage = async (): Promise<AppStorage | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setAppStorage = async (newData: AppStorage) => {
  try {
    AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
};

const defaultState: AppContext = {
  greeting: '',
  setGreeting: () => {},
  moodList: [],
  setMoodList: () => {},
};

const Context = React.createContext<AppContext>(defaultState);

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [greeting, setGreeting] = React.useState('');
  const [moodList, setMoodList] = React.useState<MoodWithTimestamp[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await getAppStorage();

      if (data) {
        setMoodList(data.moods);
      }
    })();
  }, []);

  const providerValue: AppContext = {
    greeting,
    setGreeting,
    moodList,
    setMoodList,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export const useAppContext = () => React.useContext(Context);
