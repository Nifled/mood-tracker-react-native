import React from 'react';
import { Mood, MoodWithTimestamp } from './types';

type AppContext = {
  greeting: string;
  setGreeting: React.Dispatch<React.SetStateAction<string>>;
  moodList: MoodWithTimestamp[];
  setMoodList: React.Dispatch<React.SetStateAction<MoodWithTimestamp[]>>;
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

  const providerValue: AppContext = {
    greeting,
    setGreeting,
    moodList,
    setMoodList,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export const useAppContext = () => React.useContext(Context);
