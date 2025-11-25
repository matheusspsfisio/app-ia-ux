'use client';

import { Activity, TrendingUp, Award, Zap } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface DashboardProps {
  storage: ReturnType<typeof useLocalStorage>;
}

export default function Dashboard({ storage }: DashboardProps) {
  const stats = storage.getUserStats();
  const recentWorkouts = storage.workouts.slice(-5).reverse();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#005B94]/20 border border-[#00BFFF]/30 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">
          Bem-vindo, {storage.profile?.name || 'Atleta'}! 💪
        </h2>
        <p className="text-gray-400">
          Continue sua jornada de evolução
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-4 hover:border-[#00BFFF]/50 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.totalWorkouts}</p>
              <p className="text-xs text-gray-400">Treinos</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-4 hover:border-[#00BFFF]/50 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{(stats.totalVolume / 1000).toFixed(1)}t</p>
              <p className="text-xs text-gray-400">Volume</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-4 hover:border-[#00BFFF]/50 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.currentStreak}</p>
              <p className="text-xs text-gray-400">Sequência</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-4 hover:border-[#00BFFF]/50 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.badges.length}</p>
              <p className="text-xs text-gray-400">Conquistas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Treinos Recentes</h3>
        {recentWorkouts.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Nenhum treino registrado ainda</p>
            <p className="text-sm mt-1">Comece sua jornada agora!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="bg-[#0D0D0D] border border-[#00BFFF]/10 rounded-xl p-4 hover:border-[#00BFFF]/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{workout.name}</h4>
                    <p className="text-sm text-gray-400">
                      {new Date(workout.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#00BFFF]">{workout.duration} min</p>
                    <p className="text-xs text-gray-400">
                      {workout.exercises.length} exercícios
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Badges Preview */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Conquistas Recentes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {storage.badges.slice(0, 5).map((badge) => (
            <div
              key={badge.id}
              className={`bg-[#0D0D0D] border rounded-xl p-4 text-center transition-all ${
                badge.unlocked
                  ? 'border-[#00BFFF]/30 hover:border-[#00BFFF]/50'
                  : 'border-gray-700 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold">{badge.name}</p>
              <p className="text-xs text-gray-400 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
