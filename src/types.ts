export type Mood = {
  emoji: string;
  description: string;
};

export type MoodWithTimestamp = {
  mood: Mood;
  timestamp: number;
};
