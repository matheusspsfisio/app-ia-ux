// Types para o IAthletic

export interface Exercise {
  id: string;
  name: string;
  category: string;
  muscleGroup: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  instructions: string[];
}

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: WorkoutSet[];
}

export interface Workout {
  id: string;
  name: string;
  date: string;
  exercises: WorkoutExercise[];
  duration: number;
  completed: boolean;
}

export interface OneRMTest {
  exerciseId: string;
  weight: number;
  reps: number;
  oneRM: number;
  date: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
}

export interface UserProfile {
  name: string;
  age: number;
  weight: number;
  height: number;
  goal: 'hypertrophy' | 'strength' | 'endurance';
  experience: 'beginner' | 'intermediate' | 'advanced';
  avatar?: string;
}

export interface SocialPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  exerciseName: string;
  weight: number;
  reps: number;
  date: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  date: string;
}

export interface UserStats {
  totalWorkouts: number;
  totalVolume: number;
  currentStreak: number;
  badges: Badge[];
  personalRecords: OneRMTest[];
}
