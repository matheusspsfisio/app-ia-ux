'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Zap, Target } from 'lucide-react';
import { mockExercises } from '@/lib/mockData';
import { calculateOneRM, calculateLoadSuggestion } from '@/lib/utils-workout';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface OneRMCalculatorProps {
  storage: ReturnType<typeof useLocalStorage>;
}

export default function OneRMCalculator({ storage }: OneRMCalculatorProps) {
  const [selectedExercise, setSelectedExercise] = useState(mockExercises[0].id);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (w > 0 && r > 0 && r <= 20) {
      const oneRM = calculateOneRM(w, r);
      setResult(oneRM);

      // Save to storage
      storage.addOneRMTest({
        exerciseId: selectedExercise,
        weight: w,
        reps: r,
        oneRM,
        date: new Date().toISOString(),
      });
    }
  };

  const selectedExerciseData = mockExercises.find((ex) => ex.id === selectedExercise);
  const goal = storage.profile?.goal || 'hypertrophy';

  const suggestions = result ? calculateLoadSuggestion(result, goal) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Calculadora de 1RM</h2>
        <p className="text-gray-400">Descubra sua força máxima e cargas ideais</p>
      </div>

      {/* Calculator Card */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-[#00BFFF]" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Calcular 1RM</h3>
            <p className="text-sm text-gray-400">Repetição Máxima</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Exercise Selection */}
          <div>
            <label className="block text-sm font-semibold mb-2">Exercício</label>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00BFFF]/50 transition-all"
            >
              {mockExercises.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.name}
                </option>
              ))}
            </select>
          </div>

          {/* Weight Input */}
          <div>
            <label className="block text-sm font-semibold mb-2">Peso Levantado (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 80"
              className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF]/50 transition-all"
            />
          </div>

          {/* Reps Input */}
          <div>
            <label className="block text-sm font-semibold mb-2">Repetições Realizadas</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Ex: 8"
              className="w-full bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF]/50 transition-all"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-[#00BFFF] to-[#005B94] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#00BFFF]/20 transition-all"
          >
            Calcular 1RM
          </button>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#005B94]/20 border border-[#00BFFF]/30 rounded-2xl p-6">
          <div className="text-center mb-6">
            <p className="text-gray-400 mb-2">Seu 1RM em {selectedExerciseData?.name}</p>
            <p className="text-5xl font-bold text-[#00BFFF]">{result} kg</p>
          </div>

          {/* Load Suggestions */}
          {suggestions && (
            <div className="space-y-4">
              <h4 className="font-bold text-center mb-4">Sugestões de Carga</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Hypertrophy */}
                <div className={`bg-[#1A1A1A] border rounded-xl p-4 ${
                  goal === 'hypertrophy' ? 'border-[#00BFFF]' : 'border-[#00BFFF]/20'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-[#00BFFF]" />
                    <h5 className="font-bold">Hipertrofia</h5>
                  </div>
                  <p className="text-2xl font-bold text-[#00BFFF] mb-1">
                    {goal === 'hypertrophy' ? suggestions.weight : Math.round(result * 0.7)} kg
                  </p>
                  <p className="text-sm text-gray-400">
                    {goal === 'hypertrophy' ? suggestions.reps : '8-12'} reps × {goal === 'hypertrophy' ? suggestions.sets : 4} séries
                  </p>
                  <p className="text-xs text-gray-500 mt-2">70% do 1RM</p>
                </div>

                {/* Strength */}
                <div className={`bg-[#1A1A1A] border rounded-xl p-4 ${
                  goal === 'strength' ? 'border-[#00BFFF]' : 'border-[#00BFFF]/20'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#00BFFF]" />
                    <h5 className="font-bold">Força</h5>
                  </div>
                  <p className="text-2xl font-bold text-[#00BFFF] mb-1">
                    {goal === 'strength' ? suggestions.weight : Math.round(result * 0.85)} kg
                  </p>
                  <p className="text-sm text-gray-400">
                    {goal === 'strength' ? suggestions.reps : '3-5'} reps × {goal === 'strength' ? suggestions.sets : 5} séries
                  </p>
                  <p className="text-xs text-gray-500 mt-2">85% do 1RM</p>
                </div>

                {/* Endurance */}
                <div className={`bg-[#1A1A1A] border rounded-xl p-4 ${
                  goal === 'endurance' ? 'border-[#00BFFF]' : 'border-[#00BFFF]/20'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-[#00BFFF]" />
                    <h5 className="font-bold">Resistência</h5>
                  </div>
                  <p className="text-2xl font-bold text-[#00BFFF] mb-1">
                    {goal === 'endurance' ? suggestions.weight : Math.round(result * 0.5)} kg
                  </p>
                  <p className="text-sm text-gray-400">
                    {goal === 'endurance' ? suggestions.reps : '15-20'} reps × {goal === 'endurance' ? suggestions.sets : 3} séries
                  </p>
                  <p className="text-xs text-gray-500 mt-2">50% do 1RM</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Personal Records */}
      <div className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Recordes Pessoais</h3>
        {storage.oneRMTests.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Nenhum teste registrado ainda</p>
            <p className="text-sm mt-1">Faça seu primeiro teste acima!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {storage.oneRMTests
              .sort((a, b) => b.oneRM - a.oneRM)
              .slice(0, 5)
              .map((test, index) => {
                const exercise = mockExercises.find((ex) => ex.id === test.exerciseId);
                return (
                  <div
                    key={index}
                    className="bg-[#0D0D0D] border border-[#00BFFF]/10 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-semibold">{exercise?.name}</h4>
                      <p className="text-sm text-gray-400">
                        {test.weight}kg × {test.reps} reps
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#00BFFF]">{test.oneRM}kg</p>
                      <p className="text-xs text-gray-400">1RM</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
