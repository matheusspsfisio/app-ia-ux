// Utility functions para cálculos de treino

import { OneRMTest } from './types';

// Calcula 1RM usando a fórmula de Epley
export function calculateOneRM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

// Calcula carga sugerida baseada no objetivo
export function calculateLoadSuggestion(
  oneRM: number,
  goal: 'hypertrophy' | 'strength' | 'endurance'
): { weight: number; reps: string; sets: number } {
  switch (goal) {
    case 'hypertrophy':
      return {
        weight: Math.round(oneRM * 0.7), // 70% do 1RM
        reps: '8-12',
        sets: 4
      };
    case 'strength':
      return {
        weight: Math.round(oneRM * 0.85), // 85% do 1RM
        reps: '3-5',
        sets: 5
      };
    case 'endurance':
      return {
        weight: Math.round(oneRM * 0.5), // 50% do 1RM
        reps: '15-20',
        sets: 3
      };
  }
}

// Formata data para exibição
export function formatDate(date: string): string {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Hoje';
  if (days === 1) return 'Ontem';
  if (days < 7) return `${days} dias atrás`;
  
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Calcula volume total de treino
export function calculateVolume(weight: number, reps: number, sets: number): number {
  return weight * reps * sets;
}

// Calcula streak de treinos
export function calculateStreak(workoutDates: string[]): number {
  if (workoutDates.length === 0) return 0;

  const sortedDates = workoutDates
    .map(d => new Date(d))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (const date of sortedDates) {
    const workoutDate = new Date(date);
    workoutDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor(
      (currentDate.getTime() - workoutDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === streak || (streak === 0 && diffDays <= 1)) {
      streak++;
      currentDate = workoutDate;
    } else {
      break;
    }
  }

  return streak;
}

// Verifica se badge foi desbloqueado
export function checkBadgeUnlock(
  badgeId: string,
  stats: {
    totalWorkouts: number;
    maxBench: number;
    maxSquat: number;
    currentStreak: number;
  }
): boolean {
  switch (badgeId) {
    case 'badge-1':
      return stats.totalWorkouts >= 1;
    case 'badge-2':
      return stats.maxBench >= 100;
    case 'badge-3':
      return stats.currentStreak >= 7;
    case 'badge-4':
      return stats.maxSquat >= 150;
    case 'badge-5':
      return stats.totalWorkouts >= 100;
    default:
      return false;
  }
}
