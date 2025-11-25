// Mock data para o IAthletic
import { Exercise, Badge, SocialPost } from './types';

export const mockExercises: Exercise[] = [
  // PEITO (8 exercícios)
  {
    id: '1',
    name: 'Supino Reto',
    category: 'Peito',
    muscleGroup: 'Peitoral',
    description: 'Exercício fundamental para desenvolvimento do peitoral',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/supino-reto',
    instructions: [
      'Deite-se no banco com os pés firmes no chão',
      'Segure a barra com pegada um pouco mais larga que os ombros',
      'Desça a barra controladamente até o peito',
      'Empurre a barra de volta à posição inicial'
    ]
  },
  {
    id: 'peito-2',
    name: 'Supino Inclinado',
    category: 'Peito',
    muscleGroup: 'Peitoral Superior',
    description: 'Foco no desenvolvimento da porção superior do peitoral',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/supino-inclinado',
    instructions: [
      'Ajuste o banco em 30-45 graus de inclinação',
      'Deite-se e segure a barra acima do peito superior',
      'Desça controladamente até a parte superior do peito',
      'Empurre de volta à posição inicial'
    ]
  },
  {
    id: 'peito-3',
    name: 'Flexão de Braço',
    category: 'Peito',
    muscleGroup: 'Peitoral e Tríceps',
    description: 'Exercício funcional clássico usando peso corporal',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/flexao',
    instructions: [
      'Posicione as mãos no chão na largura dos ombros',
      'Mantenha o corpo reto da cabeça aos pés',
      'Desça até o peito quase tocar o chão',
      'Empurre de volta à posição inicial'
    ]
  },
  {
    id: 'peito-4',
    name: 'Crucifixo com Halteres',
    category: 'Peito',
    muscleGroup: 'Peitoral',
    description: 'Isolamento e alongamento do peitoral',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/crucifixo',
    instructions: [
      'Deite-se no banco com halteres acima do peito',
      'Abra os braços em arco mantendo leve flexão nos cotovelos',
      'Desça até sentir alongamento no peito',
      'Retorne à posição inicial contraindo o peitoral'
    ]
  },
  {
    id: 'peito-5',
    name: 'Crossover no Cabo',
    category: 'Peito',
    muscleGroup: 'Peitoral',
    description: 'Exercício de isolamento com tensão constante',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/crossover',
    instructions: [
      'Fique em pé entre as polias altas',
      'Segure as alças e incline levemente o tronco',
      'Cruze as mãos à frente do corpo',
      'Retorne controladamente à posição inicial'
    ]
  },
  {
    id: 'peito-6',
    name: 'Supino Declinado',
    category: 'Peito',
    muscleGroup: 'Peitoral Inferior',
    description: 'Enfatiza a porção inferior do peitoral',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/supino-declinado',
    instructions: [
      'Ajuste o banco em declínio (15-30 graus)',
      'Prenda os pés e deite-se',
      'Desça a barra até a parte inferior do peito',
      'Empurre de volta à posição inicial'
    ]
  },
  {
    id: 'peito-7',
    name: 'Peck Deck (Voador)',
    category: 'Peito',
    muscleGroup: 'Peitoral',
    description: 'Isolamento do peitoral em máquina',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/peck-deck',
    instructions: [
      'Ajuste o banco e segure as alças',
      'Mantenha os cotovelos levemente flexionados',
      'Junte as alças à frente do peito',
      'Retorne controladamente à posição inicial'
    ]
  },
  {
    id: 'peito-8',
    name: 'Mergulho em Paralelas',
    category: 'Peito',
    muscleGroup: 'Peitoral Inferior e Tríceps',
    description: 'Exercício funcional avançado com peso corporal',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/mergulho',
    instructions: [
      'Segure as barras paralelas e suspenda o corpo',
      'Incline o tronco para frente',
      'Desça flexionando os cotovelos',
      'Empurre de volta à posição inicial'
    ]
  },

  // COSTAS (8 exercícios)
  {
    id: '3',
    name: 'Levantamento Terra',
    category: 'Costas',
    muscleGroup: 'Lombar e Posterior',
    description: 'Exercício completo para força e massa muscular',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/terra',
    instructions: [
      'Fique em pé com a barra próxima às canelas',
      'Segure a barra com pegada pronada',
      'Mantenha as costas retas e levante a barra',
      'Estenda completamente quadris e joelhos'
    ]
  },
  {
    id: '5',
    name: 'Barra Fixa',
    category: 'Costas',
    muscleGroup: 'Dorsais',
    description: 'Exercício clássico para costas largas',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/barra-fixa',
    instructions: [
      'Segure a barra com pegada pronada',
      'Puxe o corpo até o queixo passar a barra',
      'Desça controladamente',
      'Mantenha o core ativado'
    ]
  },
  {
    id: 'costas-3',
    name: 'Remada Curvada',
    category: 'Costas',
    muscleGroup: 'Dorsais e Trapézio',
    description: 'Exercício fundamental para espessura das costas',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/remada-curvada',
    instructions: [
      'Incline o tronco para frente mantendo costas retas',
      'Segure a barra com pegada pronada',
      'Puxe a barra em direção ao abdômen',
      'Desça controladamente'
    ]
  },
  {
    id: 'costas-4',
    name: 'Puxada Frontal',
    category: 'Costas',
    muscleGroup: 'Dorsais',
    description: 'Desenvolvimento de largura das costas em máquina',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/puxada-frontal',
    instructions: [
      'Sente-se e ajuste as almofadas nas coxas',
      'Segure a barra com pegada larga',
      'Puxe a barra até a altura do peito',
      'Retorne controladamente'
    ]
  },
  {
    id: 'costas-5',
    name: 'Remada Unilateral',
    category: 'Costas',
    muscleGroup: 'Dorsais',
    description: 'Trabalho unilateral para correção de assimetrias',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/remada-unilateral',
    instructions: [
      'Apoie um joelho e uma mão no banco',
      'Segure o halter com a mão livre',
      'Puxe o halter em direção ao quadril',
      'Desça controladamente'
    ]
  },
  {
    id: 'costas-6',
    name: 'Remada Baixa',
    category: 'Costas',
    muscleGroup: 'Dorsais e Lombar',
    description: 'Exercício em cabo para espessura das costas',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/remada-baixa',
    instructions: [
      'Sente-se na máquina com pés apoiados',
      'Segure a alça com as duas mãos',
      'Puxe em direção ao abdômen',
      'Retorne controladamente'
    ]
  },
  {
    id: 'costas-7',
    name: 'Pullover com Halter',
    category: 'Costas',
    muscleGroup: 'Dorsais e Peitoral',
    description: 'Expansão da caixa torácica e trabalho de dorsais',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/pullover',
    instructions: [
      'Deite-se perpendicular ao banco',
      'Segure um halter com as duas mãos acima do peito',
      'Desça o halter atrás da cabeça',
      'Retorne à posição inicial'
    ]
  },
  {
    id: 'costas-8',
    name: 'Hiperextensão Lombar',
    category: 'Costas',
    muscleGroup: 'Lombar',
    description: 'Fortalecimento da região lombar',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/hiperextensao',
    instructions: [
      'Posicione-se no aparelho com quadris apoiados',
      'Cruze os braços no peito',
      'Desça o tronco controladamente',
      'Suba até a posição neutra'
    ]
  },

  // PERNAS (9 exercícios)
  {
    id: '2',
    name: 'Agachamento Livre',
    category: 'Pernas',
    muscleGroup: 'Quadríceps',
    description: 'Rei dos exercícios para pernas e glúteos',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/agachamento',
    instructions: [
      'Posicione a barra nas costas, apoiada nos trapézios',
      'Pés na largura dos ombros',
      'Desça controladamente mantendo as costas retas',
      'Suba empurrando pelos calcanhares'
    ]
  },
  {
    id: 'pernas-2',
    name: 'Leg Press 45°',
    category: 'Pernas',
    muscleGroup: 'Quadríceps e Glúteos',
    description: 'Exercício em máquina para desenvolvimento de pernas',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/leg-press',
    instructions: [
      'Sente-se na máquina com costas apoiadas',
      'Posicione os pés na plataforma',
      'Desça até 90 graus nos joelhos',
      'Empurre de volta à posição inicial'
    ]
  },
  {
    id: 'pernas-3',
    name: 'Cadeira Extensora',
    category: 'Pernas',
    muscleGroup: 'Quadríceps',
    description: 'Isolamento do quadríceps',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/extensora',
    instructions: [
      'Sente-se na máquina e ajuste o apoio',
      'Posicione as pernas sob o rolo',
      'Estenda as pernas completamente',
      'Desça controladamente'
    ]
  },
  {
    id: 'pernas-4',
    name: 'Mesa Flexora',
    category: 'Pernas',
    muscleGroup: 'Posteriores de Coxa',
    description: 'Isolamento dos músculos posteriores',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/flexora',
    instructions: [
      'Deite-se de bruços na máquina',
      'Posicione as pernas sob o rolo',
      'Flexione os joelhos trazendo o rolo em direção aos glúteos',
      'Retorne controladamente'
    ]
  },
  {
    id: 'pernas-5',
    name: 'Stiff (Levantamento Terra Romeno)',
    category: 'Pernas',
    muscleGroup: 'Posteriores e Glúteos',
    description: 'Foco em posteriores de coxa e glúteos',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/stiff',
    instructions: [
      'Segure a barra com pegada pronada',
      'Mantenha as pernas levemente flexionadas',
      'Desça a barra deslizando pelas pernas',
      'Suba contraindo glúteos e posteriores'
    ]
  },
  {
    id: 'pernas-6',
    name: 'Afundo (Lunges)',
    category: 'Pernas',
    muscleGroup: 'Quadríceps e Glúteos',
    description: 'Exercício funcional unilateral',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/afundo',
    instructions: [
      'Dê um passo à frente',
      'Desça flexionando ambos os joelhos',
      'O joelho traseiro deve quase tocar o chão',
      'Empurre de volta à posição inicial'
    ]
  },
  {
    id: 'pernas-7',
    name: 'Panturrilha em Pé',
    category: 'Pernas',
    muscleGroup: 'Panturrilhas',
    description: 'Desenvolvimento das panturrilhas',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/panturrilha',
    instructions: [
      'Posicione-se na máquina com ombros sob as almofadas',
      'Fique na ponta dos pés',
      'Suba o máximo possível',
      'Desça controladamente'
    ]
  },
  {
    id: 'pernas-8',
    name: 'Agachamento Búlgaro',
    category: 'Pernas',
    muscleGroup: 'Quadríceps e Glúteos',
    description: 'Exercício unilateral avançado',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/bulgaro',
    instructions: [
      'Apoie um pé em um banco atrás de você',
      'Desça flexionando a perna da frente',
      'Mantenha o tronco ereto',
      'Suba empurrando pelo calcanhar'
    ]
  },
  {
    id: 'pernas-9',
    name: 'Agachamento Sumô',
    category: 'Pernas',
    muscleGroup: 'Glúteos e Adutores',
    description: 'Variação com foco em glúteos e parte interna das coxas',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/sumo',
    instructions: [
      'Posicione os pés mais largos que os ombros',
      'Aponte os pés para fora',
      'Desça mantendo o tronco ereto',
      'Suba contraindo glúteos'
    ]
  },

  // OMBROS (8 exercícios)
  {
    id: '4',
    name: 'Desenvolvimento Militar',
    category: 'Ombros',
    muscleGroup: 'Deltoides',
    description: 'Exercício principal para ombros fortes',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/militar',
    instructions: [
      'Segure a barra na altura dos ombros',
      'Pés na largura dos ombros',
      'Empurre a barra acima da cabeça',
      'Desça controladamente'
    ]
  },
  {
    id: 'ombros-2',
    name: 'Desenvolvimento com Halteres',
    category: 'Ombros',
    muscleGroup: 'Deltoides',
    description: 'Maior amplitude de movimento com halteres',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/dev-halteres',
    instructions: [
      'Sente-se com halteres na altura dos ombros',
      'Empurre os halteres acima da cabeça',
      'Junte-os no topo',
      'Desça controladamente'
    ]
  },
  {
    id: 'ombros-3',
    name: 'Elevação Lateral',
    category: 'Ombros',
    muscleGroup: 'Deltoide Lateral',
    description: 'Isolamento do deltoide lateral',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/elevacao-lateral',
    instructions: [
      'Fique em pé com halteres ao lado do corpo',
      'Eleve os braços lateralmente até a altura dos ombros',
      'Mantenha leve flexão nos cotovelos',
      'Desça controladamente'
    ]
  },
  {
    id: 'ombros-4',
    name: 'Elevação Frontal',
    category: 'Ombros',
    muscleGroup: 'Deltoide Anterior',
    description: 'Foco na porção anterior do ombro',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/elevacao-frontal',
    instructions: [
      'Segure halteres à frente das coxas',
      'Eleve os braços à frente até a altura dos ombros',
      'Mantenha os braços estendidos',
      'Desça controladamente'
    ]
  },
  {
    id: 'ombros-5',
    name: 'Remada Alta',
    category: 'Ombros',
    muscleGroup: 'Deltoides e Trapézio',
    description: 'Trabalho de ombros e trapézio',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/remada-alta',
    instructions: [
      'Segure a barra com pegada fechada',
      'Puxe a barra em direção ao queixo',
      'Cotovelos devem subir acima dos ombros',
      'Desça controladamente'
    ]
  },
  {
    id: 'ombros-6',
    name: 'Crucifixo Inverso',
    category: 'Ombros',
    muscleGroup: 'Deltoide Posterior',
    description: 'Isolamento da porção posterior do ombro',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/crucifixo-inverso',
    instructions: [
      'Incline o tronco para frente',
      'Segure halteres com braços pendentes',
      'Abra os braços lateralmente',
      'Retorne controladamente'
    ]
  },
  {
    id: 'ombros-7',
    name: 'Desenvolvimento Arnold',
    category: 'Ombros',
    muscleGroup: 'Deltoides',
    description: 'Variação que trabalha todas as porções do ombro',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/arnold',
    instructions: [
      'Inicie com halteres à frente com palmas voltadas para você',
      'Gire as palmas para fora enquanto empurra para cima',
      'Finalize com palmas para frente',
      'Inverta o movimento ao descer'
    ]
  },
  {
    id: 'ombros-8',
    name: 'Face Pull',
    category: 'Ombros',
    muscleGroup: 'Deltoide Posterior e Trapézio',
    description: 'Exercício em cabo para posterior e saúde dos ombros',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/face-pull',
    instructions: [
      'Ajuste a polia na altura do rosto',
      'Segure a corda com pegada neutra',
      'Puxe em direção ao rosto separando as mãos',
      'Retorne controladamente'
    ]
  },

  // BRAÇOS (8 exercícios)
  {
    id: '6',
    name: 'Rosca Direta',
    category: 'Braços',
    muscleGroup: 'Bíceps',
    description: 'Isolamento perfeito para bíceps',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/rosca',
    instructions: [
      'Segure a barra com pegada supinada',
      'Cotovelos fixos ao lado do corpo',
      'Flexione os cotovelos levantando a barra',
      'Desça controladamente'
    ]
  },
  {
    id: 'bracos-2',
    name: 'Rosca Alternada',
    category: 'Braços',
    muscleGroup: 'Bíceps',
    description: 'Trabalho unilateral com halteres',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/rosca-alternada',
    instructions: [
      'Segure halteres ao lado do corpo',
      'Flexione um braço de cada vez',
      'Gire a palma para cima durante o movimento',
      'Alterne os braços'
    ]
  },
  {
    id: 'bracos-3',
    name: 'Rosca Martelo',
    category: 'Braços',
    muscleGroup: 'Bíceps e Antebraço',
    description: 'Foco em bíceps e braquial',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/rosca-martelo',
    instructions: [
      'Segure halteres com pegada neutra',
      'Mantenha as palmas voltadas uma para outra',
      'Flexione os cotovelos',
      'Desça controladamente'
    ]
  },
  {
    id: 'bracos-4',
    name: 'Tríceps Testa',
    category: 'Braços',
    muscleGroup: 'Tríceps',
    description: 'Isolamento do tríceps',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/triceps-testa',
    instructions: [
      'Deite-se no banco com barra acima do peito',
      'Flexione apenas os cotovelos descendo a barra em direção à testa',
      'Mantenha os cotovelos fixos',
      'Estenda os braços de volta'
    ]
  },
  {
    id: 'bracos-5',
    name: 'Tríceps Corda',
    category: 'Braços',
    muscleGroup: 'Tríceps',
    description: 'Exercício em cabo para tríceps',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/triceps-corda',
    instructions: [
      'Segure a corda na polia alta',
      'Mantenha cotovelos fixos ao lado do corpo',
      'Estenda os braços para baixo separando a corda',
      'Retorne controladamente'
    ]
  },
  {
    id: 'bracos-6',
    name: 'Tríceps Francês',
    category: 'Braços',
    muscleGroup: 'Tríceps',
    description: 'Alongamento máximo do tríceps',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/triceps-frances',
    instructions: [
      'Segure um halter com as duas mãos acima da cabeça',
      'Desça o halter atrás da cabeça',
      'Mantenha os cotovelos apontando para cima',
      'Estenda os braços de volta'
    ]
  },
  {
    id: 'bracos-7',
    name: 'Rosca Scott',
    category: 'Braços',
    muscleGroup: 'Bíceps',
    description: 'Isolamento total do bíceps',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/rosca-scott',
    instructions: [
      'Apoie os braços no banco Scott',
      'Segure a barra com pegada supinada',
      'Flexione os cotovelos',
      'Desça controladamente sem estender completamente'
    ]
  },
  {
    id: 'bracos-8',
    name: 'Rosca Concentrada',
    category: 'Braços',
    muscleGroup: 'Bíceps',
    description: 'Máximo isolamento do bíceps',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/rosca-concentrada',
    instructions: [
      'Sente-se e apoie o cotovelo na parte interna da coxa',
      'Segure um halter',
      'Flexione o cotovelo trazendo o halter ao ombro',
      'Desça controladamente'
    ]
  },

  // CORE (7 exercícios)
  {
    id: 'core-1',
    name: 'Prancha',
    category: 'Core',
    muscleGroup: 'Abdômen',
    description: 'Exercício isométrico para core',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/prancha',
    instructions: [
      'Apoie os antebraços e pontas dos pés no chão',
      'Mantenha o corpo reto da cabeça aos pés',
      'Contraia o abdômen',
      'Mantenha a posição pelo tempo determinado'
    ]
  },
  {
    id: 'core-2',
    name: 'Abdominal Supra',
    category: 'Core',
    muscleGroup: 'Abdômen Superior',
    description: 'Exercício clássico para abdômen',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/abdominal',
    instructions: [
      'Deite-se de costas com joelhos flexionados',
      'Mãos atrás da cabeça',
      'Eleve o tronco contraindo o abdômen',
      'Desça controladamente'
    ]
  },
  {
    id: 'core-3',
    name: 'Elevação de Pernas',
    category: 'Core',
    muscleGroup: 'Abdômen Inferior',
    description: 'Foco na porção inferior do abdômen',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/elevacao-pernas',
    instructions: [
      'Deite-se de costas com pernas estendidas',
      'Mãos ao lado do corpo ou sob os glúteos',
      'Eleve as pernas até 90 graus',
      'Desça controladamente sem tocar o chão'
    ]
  },
  {
    id: 'core-4',
    name: 'Russian Twist',
    category: 'Core',
    muscleGroup: 'Oblíquos',
    description: 'Rotação para trabalhar oblíquos',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/russian-twist',
    instructions: [
      'Sente-se com joelhos flexionados e pés elevados',
      'Incline o tronco levemente para trás',
      'Gire o tronco de um lado para o outro',
      'Segure um peso para maior intensidade'
    ]
  },
  {
    id: 'core-5',
    name: 'Mountain Climbers',
    category: 'Core',
    muscleGroup: 'Abdômen e Cardio',
    description: 'Exercício dinâmico para core e condicionamento',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/mountain-climbers',
    instructions: [
      'Inicie em posição de prancha alta',
      'Traga um joelho em direção ao peito',
      'Alterne as pernas rapidamente',
      'Mantenha o core contraído'
    ]
  },
  {
    id: 'core-6',
    name: 'Abdominal Bicicleta',
    category: 'Core',
    muscleGroup: 'Abdômen e Oblíquos',
    description: 'Movimento completo para abdômen',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/bicicleta',
    instructions: [
      'Deite-se de costas com mãos atrás da cabeça',
      'Eleve as pernas',
      'Traga o cotovelo ao joelho oposto alternadamente',
      'Mantenha movimento contínuo'
    ]
  },
  {
    id: 'core-7',
    name: 'Prancha Lateral',
    category: 'Core',
    muscleGroup: 'Oblíquos',
    description: 'Isometria para oblíquos',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    videoUrl: 'https://example.com/prancha-lateral',
    instructions: [
      'Apoie-se em um antebraço e lateral do pé',
      'Mantenha o corpo reto',
      'Eleve o quadril do chão',
      'Mantenha a posição e depois troque de lado'
    ]
  }
];

export const mockBadges: Badge[] = [
  {
    id: 'badge-1',
    name: 'Primeira Série',
    description: 'Complete seu primeiro treino',
    icon: '🎯',
    unlocked: true,
    unlockedDate: '2024-01-15'
  },
  {
    id: 'badge-2',
    name: 'Força Bruta',
    description: 'Atinja 100kg no supino',
    icon: '💪',
    unlocked: true,
    unlockedDate: '2024-02-20'
  },
  {
    id: 'badge-3',
    name: 'Consistência',
    description: 'Treine por 7 dias seguidos',
    icon: '🔥',
    unlocked: false
  },
  {
    id: 'badge-4',
    name: 'Pernas de Aço',
    description: 'Agache 150kg',
    icon: '🦵',
    unlocked: false
  },
  {
    id: 'badge-5',
    name: 'Mestre do Ferro',
    description: 'Complete 100 treinos',
    icon: '👑',
    unlocked: false
  }
];

export const mockSocialPosts: SocialPost[] = [
  {
    id: 'post-1',
    userId: 'user-1',
    userName: 'Carlos Silva',
    userAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop',
    exerciseName: 'Supino Reto',
    weight: 100,
    reps: 8,
    date: '2024-03-15T10:30:00',
    likes: 24,
    comments: [
      {
        id: 'comment-1',
        userId: 'user-2',
        userName: 'Ana Costa',
        text: 'Parabéns! Que evolução! 💪',
        date: '2024-03-15T11:00:00'
      }
    ]
  },
  {
    id: 'post-2',
    userId: 'user-2',
    userName: 'Ana Costa',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    exerciseName: 'Agachamento Livre',
    weight: 80,
    reps: 10,
    date: '2024-03-15T09:15:00',
    likes: 18,
    comments: []
  },
  {
    id: 'post-3',
    userId: 'user-3',
    userName: 'Pedro Santos',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    exerciseName: 'Levantamento Terra',
    weight: 140,
    reps: 5,
    date: '2024-03-14T18:45:00',
    likes: 32,
    comments: [
      {
        id: 'comment-2',
        userId: 'user-1',
        userName: 'Carlos Silva',
        text: 'Monstro! 🔥',
        date: '2024-03-14T19:00:00'
      },
      {
        id: 'comment-3',
        userId: 'user-4',
        userName: 'Julia Mendes',
        text: 'Inspirador!',
        date: '2024-03-14T19:30:00'
      }
    ]
  }
];
