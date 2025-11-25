'use client';

import { useState } from 'react';
import { Calendar, Dumbbell, Clock, TrendingUp, ChevronRight, Check } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface WorkoutPlansProps {
  storage: ReturnType<typeof useLocalStorage>;
}

interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  daysPerWeek: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  goal: 'hypertrophy' | 'strength' | 'endurance';
  schedule: {
    day: string;
    focus: string;
    exercises: string[];
  }[];
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: 'beginner-3day',
    name: 'Iniciante Full Body',
    description: 'Treino completo 3x por semana para iniciantes',
    daysPerWeek: 3,
    duration: '45-60 min',
    level: 'beginner',
    goal: 'hypertrophy',
    schedule: [
      {
        day: 'Segunda',
        focus: 'Full Body A',
        exercises: ['Supino Reto', 'Remada Curvada', 'Agachamento', 'Desenvolvimento', 'Rosca Direta']
      },
      {
        day: 'Quarta',
        focus: 'Full Body B',
        exercises: ['Supino Inclinado', 'Puxada Frontal', 'Leg Press', 'Elevação Lateral', 'Tríceps Testa']
      },
      {
        day: 'Sexta',
        focus: 'Full Body C',
        exercises: ['Crucifixo', 'Remada Baixa', 'Stiff', 'Desenvolvimento Arnold', 'Rosca Martelo']
      }
    ]
  },
  {
    id: 'intermediate-4day',
    name: 'Intermediário Upper/Lower',
    description: 'Divisão superior/inferior 4x por semana',
    daysPerWeek: 4,
    duration: '60-75 min',
    level: 'intermediate',
    goal: 'hypertrophy',
    schedule: [
      {
        day: 'Segunda',
        focus: 'Superior A',
        exercises: ['Supino Reto', 'Remada Curvada', 'Desenvolvimento', 'Puxada Frontal', 'Rosca Direta', 'Tríceps Pulley']
      },
      {
        day: 'Terça',
        focus: 'Inferior A',
        exercises: ['Agachamento', 'Leg Press', 'Stiff', 'Cadeira Extensora', 'Cadeira Flexora', 'Panturrilha']
      },
      {
        day: 'Quinta',
        focus: 'Superior B',
        exercises: ['Supino Inclinado', 'Remada Baixa', 'Elevação Lateral', 'Crucifixo', 'Rosca Martelo', 'Tríceps Testa']
      },
      {
        day: 'Sexta',
        focus: 'Inferior B',
        exercises: ['Agachamento Frontal', 'Avanço', 'Levantamento Terra', 'Cadeira Abdutora', 'Cadeira Adutora', 'Panturrilha Sentado']
      }
    ]
  },
  {
    id: 'advanced-5day',
    name: 'Avançado Push/Pull/Legs',
    description: 'Divisão PPL 5x por semana para máxima hipertrofia',
    daysPerWeek: 5,
    duration: '75-90 min',
    level: 'advanced',
    goal: 'hypertrophy',
    schedule: [
      {
        day: 'Segunda',
        focus: 'Push (Empurrar)',
        exercises: ['Supino Reto', 'Supino Inclinado', 'Crucifixo', 'Desenvolvimento', 'Elevação Lateral', 'Tríceps Pulley', 'Tríceps Testa']
      },
      {
        day: 'Terça',
        focus: 'Pull (Puxar)',
        exercises: ['Barra Fixa', 'Remada Curvada', 'Puxada Frontal', 'Remada Baixa', 'Rosca Direta', 'Rosca Martelo', 'Rosca Concentrada']
      },
      {
        day: 'Quarta',
        focus: 'Legs (Pernas)',
        exercises: ['Agachamento', 'Leg Press', 'Stiff', 'Cadeira Extensora', 'Cadeira Flexora', 'Avanço', 'Panturrilha']
      },
      {
        day: 'Quinta',
        focus: 'Push (Empurrar)',
        exercises: ['Supino Inclinado', 'Supino Declinado', 'Crossover', 'Desenvolvimento Arnold', 'Elevação Frontal', 'Tríceps Francês', 'Mergulho']
      },
      {
        day: 'Sexta',
        focus: 'Pull (Puxar)',
        exercises: ['Levantamento Terra', 'Remada Unilateral', 'Pullover', 'Remada Alta', 'Rosca Scott', 'Rosca Inversa', 'Encolhimento']
      }
    ]
  },
  {
    id: 'strength-4day',
    name: 'Força 4x Semana',
    description: 'Foco em força máxima com cargas pesadas',
    daysPerWeek: 4,
    duration: '60-75 min',
    level: 'intermediate',
    goal: 'strength',
    schedule: [
      {
        day: 'Segunda',
        focus: 'Peito + Tríceps',
        exercises: ['Supino Reto (5x5)', 'Supino Inclinado (4x6)', 'Supino Fechado (4x6)', 'Tríceps Testa (3x8)']
      },
      {
        day: 'Quarta',
        focus: 'Costas + Bíceps',
        exercises: ['Levantamento Terra (5x5)', 'Remada Curvada (4x6)', 'Barra Fixa (4x6)', 'Rosca Direta (3x8)']
      },
      {
        day: 'Quinta',
        focus: 'Ombros',
        exercises: ['Desenvolvimento (5x5)', 'Desenvolvimento Arnold (4x6)', 'Elevação Lateral (3x10)', 'Remada Alta (3x10)']
      },
      {
        day: 'Sábado',
        focus: 'Pernas',
        exercises: ['Agachamento (5x5)', 'Agachamento Frontal (4x6)', 'Stiff (4x6)', 'Leg Press (3x10)']
      }
    ]
  },
  {
    id: 'endurance-6day',
    name: 'Resistência 6x Semana',
    description: 'Alto volume para resistência muscular',
    daysPerWeek: 6,
    duration: '45-60 min',
    level: 'advanced',
    goal: 'endurance',
    schedule: [
      {
        day: 'Segunda',
        focus: 'Peito',
        exercises: ['Supino Reto (3x15)', 'Supino Inclinado (3x15)', 'Crucifixo (3x15)', 'Flexão (3x máx)']
      },
      {
        day: 'Terça',
        focus: 'Costas',
        exercises: ['Remada Curvada (3x15)', 'Puxada Frontal (3x15)', 'Remada Baixa (3x15)', 'Pullover (3x15)']
      },
      {
        day: 'Quarta',
        focus: 'Pernas',
        exercises: ['Agachamento (3x20)', 'Leg Press (3x20)', 'Cadeira Extensora (3x20)', 'Cadeira Flexora (3x20)']
      },
      {
        day: 'Quinta',
        focus: 'Ombros',
        exercises: ['Desenvolvimento (3x15)', 'Elevação Lateral (3x15)', 'Elevação Frontal (3x15)', 'Remada Alta (3x15)']
      },
      {
        day: 'Sexta',
        focus: 'Braços',
        exercises: ['Rosca Direta (3x15)', 'Rosca Martelo (3x15)', 'Tríceps Pulley (3x15)', 'Tríceps Testa (3x15)']
      },
      {
        day: 'Sábado',
        focus: 'Full Body',
        exercises: ['Circuito: Burpees, Agachamento, Flexão, Remada, Desenvolvimento (3 rounds)']
      }
    ]
  }
];

export default function WorkoutPlans({ storage }: WorkoutPlansProps) {
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedGoal, setSelectedGoal] = useState<string>('all');
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const filteredPlans = workoutPlans.filter((plan) => {
    const matchesDays = plan.daysPerWeek === selectedDays;
    const matchesLevel = selectedLevel === 'all' || plan.level === selectedLevel;
    const matchesGoal = selectedGoal === 'all' || plan.goal === selectedGoal;
    return matchesDays && matchesLevel && matchesGoal;
  });

  const getLevelLabel = (level: string) => {
    const labels = {
      beginner: 'Iniciante',
      intermediate: 'Intermediário',
      advanced: 'Avançado'
    };
    return labels[level as keyof typeof labels] || level;
  };

  const getGoalLabel = (goal: string) => {
    const labels = {
      hypertrophy: 'Hipertrofia',
      strength: 'Força',
      endurance: 'Resistência'
    };
    return labels[goal as keyof typeof labels] || goal;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Treinos Sugeridos</h2>
        <p className="text-gray-400">Escolha o plano ideal para seus objetivos</p>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6 space-y-4">
        {/* Days per Week */}
        <div>
          <label className="block text-sm font-semibold mb-3">Dias por Semana</label>
          <div className="flex gap-2 flex-wrap">
            {[3, 4, 5, 6].map((days) => (
              <button
                key={days}
                onClick={() => setSelectedDays(days)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedDays === days
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-[#0D0D0D] text-gray-400 hover:text-white border border-[#00BFFF]/20'
                }`}
              >
                {days}x
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div>
          <label className="block text-sm font-semibold mb-3">Nível</label>
          <div className="flex gap-2 flex-wrap">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedLevel === level
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-[#0D0D0D] text-gray-400 hover:text-white border border-[#00BFFF]/20'
                }`}
              >
                {level === 'all' ? 'Todos' : getLevelLabel(level)}
              </button>
            ))}
          </div>
        </div>

        {/* Goal Filter */}
        <div>
          <label className="block text-sm font-semibold mb-3">Objetivo</label>
          <div className="flex gap-2 flex-wrap">
            {['all', 'hypertrophy', 'strength', 'endurance'].map((goal) => (
              <button
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedGoal === goal
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-[#0D0D0D] text-gray-400 hover:text-white border border-[#00BFFF]/20'
                }`}
              >
                {goal === 'all' ? 'Todos' : getGoalLabel(goal)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans List */}
      <div className="space-y-4">
        {filteredPlans.length === 0 ? (
          <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <p className="text-gray-400">Nenhum plano encontrado com esses filtros</p>
            <p className="text-sm text-gray-500 mt-2">Tente ajustar suas preferências</p>
          </div>
        ) : (
          filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl overflow-hidden hover:border-[#00BFFF]/50 transition-all"
            >
              {/* Plan Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  <ChevronRight
                    className={`w-6 h-6 text-[#00BFFF] transition-transform ${
                      expandedPlan === plan.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-xs rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {plan.daysPerWeek}x por semana
                  </span>
                  <span className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-xs rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {plan.duration}
                  </span>
                  <span className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-xs rounded-full flex items-center gap-1">
                    <Dumbbell className="w-3 h-3" />
                    {getLevelLabel(plan.level)}
                  </span>
                  <span className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-xs rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {getGoalLabel(plan.goal)}
                  </span>
                </div>
              </div>

              {/* Expanded Schedule */}
              {expandedPlan === plan.id && (
                <div className="border-t border-[#00BFFF]/20 bg-[#0D0D0D] p-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#00BFFF]" />
                    Cronograma Semanal
                  </h4>
                  <div className="space-y-4">
                    {plan.schedule.map((day, index) => (
                      <div
                        key={index}
                        className="bg-[#1A1A1A] border border-[#00BFFF]/10 rounded-xl p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h5 className="font-semibold text-[#00BFFF]">{day.day}</h5>
                            <p className="text-sm text-gray-400">{day.focus}</p>
                          </div>
                          <div className="w-8 h-8 bg-[#00BFFF]/10 rounded-full flex items-center justify-center">
                            <Dumbbell className="w-4 h-4 text-[#00BFFF]" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          {day.exercises.map((exercise, exIndex) => (
                            <div
                              key={exIndex}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <Check className="w-4 h-4 text-[#00BFFF]" />
                              {exercise}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-semibold py-3 rounded-xl transition-all">
                    Começar Este Plano
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
