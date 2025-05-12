import type { Card, AudioCard } from '@/types';

export const cards: Card[] = [
  {
    id: '1',
    title: 'Experiencia número 1',
    image: '/emerson_explora.jpg',
    description: '',
    phases: {
      antes: {
        title: 'Antes: Visita Acuario',
        description:
          'Gracias a mi formación tengo varias ideas sobre como trabajar la educación ambiental, sin embargo a veces fomentar estrategias que sean llamativas para los más jovenes o incluso para los grandes es complicado debido a esto la visita al parque explora fue una gran experiencia.',
      },
      durante: {
        title: 'Durante: Visita Acuario',
        description:
          'Lo primero que se nota al entrar al parque es la motivación que tienen por motivar a las personas a aprender atraves de una experiencia real, por lo tanto en el momento en que entre al acuario noté que la zona también estaba adecuada de tal forma que cada pecera, escrito o representación contaba una historia sobre tráfico, maltrato, negligencia y segundas oportunidades. Un ejemplo de ello es la zona donde tras un vidrio lleno de agua habían unas medusas flotando las personas que se toman un momento para ver más de cerca se darán cuenta de que no son seres vivos, en cambio son simples bolsas de plástico que buscan dar un claro mensaje sobre la enorme cantidad de basura que termina en los océanos y por consiguiente afecta la vida , no solo marina. No solo el acuario habían otros escenarios que contenían juegos, mensajes, pinturas y demás que buscaban llegar a las personas para hacer conciencia sobre la importancia de la educación ambiental',
      },
      despues: {
        title: 'Después: Visita Acuario',
        description:
          'Al salir del parque estaba fascinada y con la mente repleta de ideas que podía trabajar con respecto a la educación ambiental, definitivamente la visita al parque explora fue una experiencia enriquecedora que es ideal para repetir las veces que sean necesarias.',
      },
    },
  },
  {
    id: '2',
    title: 'Experiencia número 2',
    image: '/alex_explora.jpg',
    description:
      'Los ecosistemas marinos cubren más del 70% de la superficie terrestre y son fundamentales para la vida en el planeta.',
    phases: {
      antes: {
        title: 'Antes: Visita Acuario',
        description:
          '¡Qué emoción palpable siento ante la inminente visita al Parque Explora! Tras leer relatos entusiastas sobre las inmersivas exhibiciones y el profundo compromiso del parque con la divulgación científica, mi curiosidad está por las nubes. El acuario, con su promesa de encuentros cercanos con la vida acuática y lecciones sobre la fragilidad de los ecosistemas marinos, encabeza mi lista de imprescindibles. Asimismo, la perspectiva de interactuar con la ciencia y la tecnología de forma tan directa y estimulante me llena de expectación. ¡Espero con ansias la oportunidad de expandir mis conocimientos y, quién sabe, quizás descubrir nuevas pasiones! Cruzo los dedos para que el vivario haya reabierto sus puertas, pues la oportunidad de observar cerca de reptiles y anfibios sería un complemento perfecto para esta enriquecedora jornada.',
      },
      durante: {
        title: 'Durante: Visita Acuario',
        description:
          '¡Qué jornada tan absolutamente fascinante he vivido hoy en el Parque Explora! Tal como lo imaginaba, el acuario me dejó sin aliento. La asombrosa diversidad de peces, corales y demás criaturas acuáticas, presentada en recreaciones tan fieles de sus hábitats naturales, fue una verdadera lección de biodiversidad y la urgente necesidad de su conservación. Las salas interactivas resultaron ser un auténtico festín para la mente curiosa. Experimentar de primera mano con principios de física, química y biología, de una manera tan lúdica y accesible, hizo que el aprendizaje fuera increíblemente dinámico y memorable. Aunque el vivero permaneció cerrado en esta ocasión, la riqueza y la calidad de las demás exhibiciones compensaron con creces cualquier decepción. Es evidente el esmero y la dedicación del Parque Explora por ofrecer experiencias educativas de vanguardia, donde la ciencia se vuelve tangible y emocionante para visitantes de todas las edades. La conexión que logré establecer con los conceptos presentados y la reflexión sobre nuestro papel en el planeta fueron, sin duda, los puntos culminantes de mi visita.',
      },
      despues: {
        title: 'Después: Visita Acuario',
        description:
          'Las horas transcurridas desde mi inmersión en el universo del Parque Explora han estado marcadas por la reflexión y la asimilación de todo lo experimentado. La habilidad del parque para fusionar el rigor científico con la interactividad lúdica ha dejado una huella imborrable en mi comprensión del mundo natural y tecnológico. La visita no solo satisfizo mi curiosidad inicial, sino que también sembró nuevas semillas de interés y me impulsó a profundizar en algunos de los temas explorados. Compartir mis fotografías y anécdotas con amigos y familiares ha reavivado mi entusiasmo y, sin duda, los ha contagiodo con la magia del Parque Explora. Recomiendo encarecidamente este espacio a cualquier persona ávida de conocimiento y experiencias enriquecedoras. Mi visita reafirmó el invaluable papel del parque en la promoción de la educación ambiental y el fomento de una conexión más profunda y consciente con nuestro entorno. ¡Espero ansiosamente mi próxima visita, con la ilusión de encontrar el vivario abierto y seguir desvelando los secretos que el Parque Explora tiene para ofrecer!',
      },
    },
  },
];

export const audioCards: AudioCard[] = [
  {
    id: '1',
    title: 'Experiencia número 1',
    image: '/emerson_explora.jpg',
    audioSrc: 'manuela_audio.mp3',
  },
  {
    id: '2',
    title: 'Experiencia número 2',
    image: '/alex_explora.jpg',
    audioSrc: '/alex_audio.mp3',
  },
];
