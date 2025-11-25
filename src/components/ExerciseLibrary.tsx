'use client';

import { useState } from 'react';
import { Search, Info, Dumbbell } from 'lucide-react';
import { mockExercises } from '@/lib/mockData';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ExerciseLibraryProps {
  storage: ReturnType<typeof useLocalStorage>;
}

export default function ExerciseLibrary({ storage }: ExerciseLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const categories = ['Todos', 'Peito', 'Costas', 'Pernas', 'Ombros', 'Braços', 'Core'];

  // Agrupar exercícios por grupo muscular
  const groupedExercises = mockExercises.reduce((acc, exercise) => {
    const category = exercise.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(exercise);
    return acc;
  }, {} as Record<string, typeof mockExercises>);

  const filteredCategories = selectedCategory === 'Todos' 
    ? Object.keys(groupedExercises)
    : [selectedCategory];

  const selectedExerciseData = mockExercises.find((ex) => ex.id === selectedExercise);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Biblioteca de Exercícios</h2>
        <p className="text-gray-400">Explore exercícios por grupo muscular</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar exercícios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF]/50 transition-all"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-[#00BFFF] text-white'
                : 'bg-[#1A1A1A] text-gray-400 hover:text-white border border-[#00BFFF]/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grouped Exercise List */}
      <div className="space-y-6">
        {filteredCategories.map((category) => {
          const exercises = groupedExercises[category].filter((exercise) =>
            exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (exercises.length === 0) return null;

          return (
            <div key={category} className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00BFFF]/10 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category}</h3>
                  <p className="text-sm text-gray-400">{exercises.length} exercícios</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    onClick={() => setSelectedExercise(exercise.id)}
                    className="bg-[#0D0D0D] border border-[#00BFFF]/10 rounded-xl overflow-hidden hover:border-[#00BFFF]/50 transition-all cursor-pointer group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={exercise.imageUrl}
                        alt={exercise.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h4 className="font-bold text-sm">{exercise.name}</h4>
                        <p className="text-xs text-gray-400">{exercise.muscleGroup}</p>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-gray-300 line-clamp-2">{exercise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Exercise Detail Modal */}
      {selectedExerciseData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExercise(null)}
        >
          <div
            className="bg-[#1A1A1A] border border-[#00BFFF]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedExerciseData.imageUrl}
                alt={selectedExerciseData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedExercise(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#0D0D0D]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#00BFFF]/20 transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="inline-block px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-sm rounded-full mb-2">
                  {selectedExerciseData.category}
                </span>
                <h2 className="text-2xl font-bold">{selectedExerciseData.name}</h2>
                <p className="text-gray-400">{selectedExerciseData.muscleGroup}</p>
              </div>

              <div>
                <p className="text-gray-300">{selectedExerciseData.description}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-[#00BFFF]" />
                  <h3 className="font-bold">Como Executar</h3>
                </div>
                <ol className="space-y-2">
                  {selectedExerciseData.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-300">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {selectedExerciseData.videoUrl && (
                <div>
                  <h3 className="font-bold mb-2">Vídeo Demonstrativo</h3>
                  <div className="bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-lg p-4 text-center text-gray-400">
                    <p className="text-sm">Vídeo disponível em breve</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
