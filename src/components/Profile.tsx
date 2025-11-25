'use client';

import { useState, useEffect } from 'react';
import { User, Edit, Award, TrendingUp, Target } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { UserProfile } from '@/lib/types';

interface ProfileProps {
  storage: ReturnType<typeof useLocalStorage>;
}

export default function Profile({ storage }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    age: 25,
    weight: 70,
    height: 175,
    goal: 'hypertrophy',
    experience: 'intermediate',
  });

  useEffect(() => {
    if (storage.profile) {
      setFormData(storage.profile);
    }
  }, [storage.profile]);

  const handleSave = () => {
    storage.setProfile(formData);
    setIsEditing(false);
  };

  const stats = storage.getUserStats();

  const goalLabels = {
    hypertrophy: 'Hipertrofia',
    strength: 'Força',
    endurance: 'Resistência',
  };

  const experienceLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Perfil</h2>
        <p className="text-gray-400">Gerencie suas informações e progresso</p>
      </div>

      {/* Profile Card */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00BFFF] to-[#005B94] rounded-full flex items-center justify-center">
              <User className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{formData.name || 'Atleta'}</h3>
              <p className="text-gray-400">{experienceLabels[formData.experience]}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-lg hover:bg-[#00BFFF]/20 transition-all"
          >
            <Edit className="w-5 h-5 text-[#00BFFF]" />
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Idade</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Peso (kg)</label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) })}
                  className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Altura (cm)</label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: parseInt(e.target.value) })}
                className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Objetivo</label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value as any })}
                className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
              >
                <option value="hypertrophy">Hipertrofia</option>
                <option value="strength">Força</option>
                <option value="endurance">Resistência</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Experiência</label>
              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
              >
                <option value="beginner">Iniciante</option>
                <option value="intermediate">Intermediário</option>
                <option value="advanced">Avançado</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-[#00BFFF] to-[#005B94] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all"
            >
              Salvar Alterações
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#0D0D0D] rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Idade</p>
              <p className="text-xl font-bold">{formData.age} anos</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Peso</p>
              <p className="text-xl font-bold">{formData.weight} kg</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Altura</p>
              <p className="text-xl font-bold">{formData.height} cm</p>
            </div>
            <div className="bg-[#0D0D0D] rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-1">Objetivo</p>
              <p className="text-xl font-bold">{goalLabels[formData.goal]}</p>
            </div>
          </div>
        )}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.totalWorkouts}</p>
              <p className="text-sm text-gray-400">Treinos Completos</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{(stats.totalVolume / 1000).toFixed(1)}t</p>
              <p className="text-sm text-gray-400">Volume Total</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[#00BFFF]" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.badges.length}</p>
              <p className="text-sm text-gray-400">Conquistas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Conquistas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {storage.badges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-[#0D0D0D] border rounded-xl p-4 text-center transition-all ${
                badge.unlocked
                  ? 'border-[#00BFFF]/30 hover:border-[#00BFFF]/50'
                  : 'border-gray-700 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold mb-1">{badge.name}</p>
              <p className="text-xs text-gray-400">{badge.description}</p>
              {badge.unlocked && badge.unlockedDate && (
                <p className="text-xs text-[#00BFFF] mt-2">
                  {new Date(badge.unlockedDate).toLocaleDateString('pt-BR')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Personal Records */}
      {stats.personalRecords.length > 0 && (
        <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Recordes Pessoais</h3>
          <div className="space-y-3">
            {stats.personalRecords.map((record, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#00BFFF]/10 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold">Exercício #{record.exerciseId}</h4>
                  <p className="text-sm text-gray-400">
                    {record.weight}kg × {record.reps} reps
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#00BFFF]">{record.oneRM}kg</p>
                  <p className="text-xs text-gray-400">1RM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
