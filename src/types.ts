export type Mood = {
  emoji: string;
  description: string;
};

export type MoodWithTimestamp = {
  mood: Mood;
  timestamp: number;
};

export type AppContext = {
  greeting: string;
  setGreeting: React.Dispatch<React.SetStateAction<string>>;
  moodList: MoodWithTimestamp[];
  setMoodList: React.Dispatch<React.SetStateAction<MoodWithTimestamp[]>>;
};

export type AppStorage = {
  moods: MoodWithTimestamp[];
};
