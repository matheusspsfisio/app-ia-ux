'use client';

import { useState } from 'react';
import { Home, Dumbbell, Trophy, User, TrendingUp, Calendar } from 'lucide-react';
import Dashboard from '@/components/Dashboard';
import ExerciseLibrary from '@/components/ExerciseLibrary';
import OneRMCalculator from '@/components/OneRMCalculator';
import Profile from '@/components/Profile';
import SocialFeed from '@/components/SocialFeed';
import WorkoutPlans from '@/components/WorkoutPlans';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type Tab = 'dashboard' | 'exercises' | 'plans' | 'onerm' | 'social' | 'profile';

export default function IAthletic() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const storage = useLocalStorage();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard storage={storage} />;
      case 'exercises':
        return <ExerciseLibrary storage={storage} />;
      case 'plans':
        return <WorkoutPlans storage={storage} />;
      case 'onerm':
        return <OneRMCalculator storage={storage} />;
      case 'social':
        return <SocialFeed />;
      case 'profile':
        return <Profile storage={storage} />;
      default:
        return <Dashboard storage={storage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#00BFFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00BFFF] to-[#005B94] rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#005B94] bg-clip-text text-transparent">
                IAthletic
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-full text-sm">
                <span className="text-[#00BFFF]">🔥 {storage.getUserStats().currentStreak}</span>
                <span className="text-gray-400 ml-1">dias</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-sm border-t border-[#00BFFF]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'dashboard'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">Início</span>
            </button>

            <button
              onClick={() => setActiveTab('exercises')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'exercises'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-5 h-5" />
              <span className="text-xs">Exercícios</span>
            </button>

            <button
              onClick={() => setActiveTab('plans')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'plans'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Treinos</span>
            </button>

            <button
              onClick={() => setActiveTab('onerm')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'onerm'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs">1RM</span>
            </button>

            <button
              onClick={() => setActiveTab('social')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'social'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span className="text-xs">Social</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                activeTab === 'profile'
                  ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Perfil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
