'use client';

import { useState, useEffect } from 'react';
import { UserProfile, Workout, OneRMTest, Badge, UserStats } from '@/lib/types';
import { mockBadges } from '@/lib/mockData';
import { calculateStreak, checkBadgeUnlock } from '@/lib/utils-workout';

const STORAGE_KEYS = {
  PROFILE: 'iathletic_profile',
  WORKOUTS: 'iathletic_workouts',
  ONE_RM_TESTS: 'iathletic_onerm',
  BADGES: 'iathletic_badges',
};

export function useLocalStorage() {
  // Profile
  const [profile, setProfileState] = useState<UserProfile | null>(null);
  const [workouts, setWorkoutsState] = useState<Workout[]>([]);
  const [oneRMTests, setOneRMTestsState] = useState<OneRMTest[]>([]);
  const [badges, setBadgesState] = useState<Badge[]>(mockBadges);

  // Load data on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      const savedWorkouts = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
      const savedOneRM = localStorage.getItem(STORAGE_KEYS.ONE_RM_TESTS);
      const savedBadges = localStorage.getItem(STORAGE_KEYS.BADGES);

      if (savedProfile) setProfileState(JSON.parse(savedProfile));
      if (savedWorkouts) setWorkoutsState(JSON.parse(savedWorkouts));
      if (savedOneRM) setOneRMTestsState(JSON.parse(savedOneRM));
      if (savedBadges) setBadgesState(JSON.parse(savedBadges));
    }
  }, []);

  // Save profile
  const setProfile = (profile: UserProfile) => {
    setProfileState(profile);
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  };

  // Save workout
  const addWorkout = (workout: Workout) => {
    const updated = [...workouts, workout];
    setWorkoutsState(updated);
    localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(updated));
    updateBadges(updated);
  };

  // Update workout
  const updateWorkout = (workoutId: string, workout: Workout) => {
    const updated = workouts.map(w => w.id === workoutId ? workout : w);
    setWorkoutsState(updated);
    localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(updated));
  };

  // Save 1RM test
  const addOneRMTest = (test: OneRMTest) => {
    const updated = [...oneRMTests, test];
    setOneRMTestsState(updated);
    localStorage.setItem(STORAGE_KEYS.ONE_RM_TESTS, JSON.stringify(updated));
    updateBadges(workouts, updated);
  };

  // Update badges based on achievements
  const updateBadges = (currentWorkouts: Workout[] = workouts, currentTests: OneRMTest[] = oneRMTests) => {
    const workoutDates = currentWorkouts.filter(w => w.completed).map(w => w.date);
    const currentStreak = calculateStreak(workoutDates);
    
    const benchTests = currentTests.filter(t => t.exerciseId === '1');
    const squatTests = currentTests.filter(t => t.exerciseId === '2');
    
    const maxBench = benchTests.length > 0 ? Math.max(...benchTests.map(t => t.oneRM)) : 0;
    const maxSquat = squatTests.length > 0 ? Math.max(...squatTests.map(t => t.oneRM)) : 0;

    const stats = {
      totalWorkouts: currentWorkouts.filter(w => w.completed).length,
      maxBench,
      maxSquat,
      currentStreak,
    };

    const updatedBadges = badges.map(badge => {
      if (!badge.unlocked && checkBadgeUnlock(badge.id, stats)) {
        return {
          ...badge,
          unlocked: true,
          unlockedDate: new Date().toISOString(),
        };
      }
      return badge;
    });

    setBadgesState(updatedBadges);
    localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(updatedBadges));
  };

  // Get user stats
  const getUserStats = (): UserStats => {
    const completedWorkouts = workouts.filter(w => w.completed);
    const workoutDates = completedWorkouts.map(w => w.date);
    
    let totalVolume = 0;
    completedWorkouts.forEach(workout => {
      workout.exercises.forEach(exercise => {
        exercise.sets.forEach(set => {
          if (set.completed) {
            totalVolume += set.weight * set.reps;
          }
        });
      });
    });

    return {
      totalWorkouts: completedWorkouts.length,
      totalVolume,
      currentStreak: calculateStreak(workoutDates),
      badges: badges.filter(b => b.unlocked),
      personalRecords: oneRMTests.sort((a, b) => b.oneRM - a.oneRM).slice(0, 5),
    };
  };

  return {
    profile,
    setProfile,
    workouts,
    addWorkout,
    updateWorkout,
    oneRMTests,
    addOneRMTest,
    badges,
    getUserStats,
  };
}
