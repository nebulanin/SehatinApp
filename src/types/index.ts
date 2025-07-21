export interface HealthData {
  id: string;
  date: string;
  steps: number;
  calories: number;
  water: number;
  sleep: number;
  weight?: number;
}

export interface UserProfile {
  name: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
}

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  caloriesBurned: number;
  type: 'cardio' | 'strength' | 'flexibility';
}
